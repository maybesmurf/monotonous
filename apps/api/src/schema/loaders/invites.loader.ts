import { Parent, Resolver } from '@nestjs/graphql';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { PinoLogger } from 'nestjs-pino';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Invite } from '../types/invite.type';
import { Team } from '../types/team.type';
import { User } from '../types/user.type';

@Resolver(of => Invite)
export class InvitesLoader {
  constructor(
    readonly prisma: PrismaService,
    readonly logger: PinoLogger,
    readonly notificationsService: NotificationsService,
  ) {}

  @ResolveLoader(type => User)
  async invitedBy(@Parent() queries: LoaderQuery<Invite>[]) {
    const users = await this.prisma.user.findMany({
      where: {
        id: { in: queries.map(q => q.obj.invitedById) },
      },
    });

    const lookup = {};
    for (const u of users) lookup[u.id] = u;

    return queries.map(q => lookup[q.obj.invitedById]);
  }

  @ResolveLoader(type => Team)
  async team(@Parent() queries: LoaderQuery<Invite>[]) {
    const teams = await this.prisma.team.findMany({
      where: {
        id: { in: queries.map(q => q.obj.teamId) },
      },
    });

    const lookup = {};
    for (const t of teams) lookup[t.id] = t;

    return queries.map(q => lookup[q.obj.teamId]);
  }
}
