import { Parent, Resolver } from '@nestjs/graphql';
import { ResolveLoader, LoaderQuery } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Invite } from '../types/invite.type';
import { Project } from '../types/project.type';
import { Team } from '../types/team.type';
import { TeamMembership } from '../types/team_membership.type';

@Resolver(of => Team)
export class TeamsLoader {
  constructor(readonly prisma: PrismaService) {}
  @ResolveLoader(type => TeamMembership)
  async memberships(@Parent() queries: LoaderQuery<Team>[]) {
    const memberships = await this.prisma.teamMembership.findMany({
      where: {
        teamId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = memberships.reduce((acc, m) => {
      const existing = acc[m.teamId] || [];
      acc[m.teamId] = [...existing, m];
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id]);
  }

  @ResolveLoader(type => Project)
  async projects(@Parent() queries: LoaderQuery<Team>[]) {
    const projects = await this.prisma.project.findMany({
      where: {
        teamId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = projects.reduce((acc, p) => {
      const existing = acc[p.teamId] || [];
      acc[p.teamId] = [...existing, p];
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id] || []);
  }

  @ResolveLoader(type => [Invite])
  async invites(@Parent() queries: LoaderQuery<Team>[]): Promise<Invite[]> {
    const invites = await this.prisma.invite.findMany({
      where: {
        teamId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = invites.reduce((acc, i) => {
      const existing = acc[i.teamId] || [];
      acc[i.teamId] = [...existing, i];
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id]);
  }
}
