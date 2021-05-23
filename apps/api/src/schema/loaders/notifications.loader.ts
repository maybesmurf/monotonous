import { Parent, Resolver } from '@nestjs/graphql';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from '../types/user.type';
import { Notification } from '../types/notification.type';
import { Team } from '../types/team.type';
import { Project } from '../types/project.type';

type NoficationQueries = LoaderQuery<Notification>[];

@Resolver(of => Notification)
export class NotificationsLoader {
  constructor(readonly prisma: PrismaService) {}

  @ResolveLoader(type => User)
  async user(@Parent() queries: NoficationQueries) {
    console.log('user');
    const users = await this.prisma.user.findMany({
      where: {
        id: { in: queries.map(q => q.obj.userId) },
      },
    });

    const lookup = {};
    for (const x of users) lookup[x.id] = x;

    return queries.map(q => lookup[q.obj.userId]);
  }

  @ResolveLoader(type => User)
  async subject(@Parent() queries: NoficationQueries) {
    const users = await this.prisma.user.findMany({
      where: {
        id: { in: queries.map(q => q.obj.subjectId) },
      },
    });

    const lookup = {};
    for (const x of users) lookup[x.id] = x;

    return queries.map(q => lookup[q.obj.subjectId]);
  }

  @ResolveLoader(type => Team)
  async team(@Parent() queries: NoficationQueries) {
    const teams = await this.prisma.team.findMany({
      where: {
        id: { in: queries.map(q => q.obj.teamId).filter(Boolean) as string[] },
      },
    });

    const lookup = {};
    for (const x of teams) lookup[x.id] = x;

    return queries.map(q => lookup[q.obj.teamId]);
  }

  @ResolveLoader(type => Project)
  async project(@Parent() queries: NoficationQueries) {
    const projects = await this.prisma.project.findMany({
      where: {
        id: {
          in: queries.map(q => q.obj.projectId).filter(Boolean) as string[],
        },
      },
    });

    const lookup = {};
    for (const x of projects) lookup[x.id] = x;

    return queries.map(q => lookup[q.obj.projectId] || undefined);
  }
}
