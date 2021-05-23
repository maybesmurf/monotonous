import { Parent, Resolver } from '@nestjs/graphql';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { TeamMembership } from '../types/team_membership.type';
import { User } from '../types/user.type';

@Resolver(of => TeamMembership)
export class TeamMembershipsLoader {
  constructor(readonly prisma: PrismaService) {}

  @ResolveLoader(type => User)
  async user(@Parent() queries: LoaderQuery<TeamMembership>[]) {
    const users = await this.prisma.user.findMany({
      where: {
        id: { in: queries.map(q => q.obj.userId) },
      },
    });

    const lookup = {};
    for (const u of users) {
      lookup[u.id] = u;
    }

    return queries.map(q => lookup[q.obj.userId]);
  }
}
