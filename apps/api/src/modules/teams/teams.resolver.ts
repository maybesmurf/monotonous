import { PrismaClient } from '@prisma/client';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';

import { CurrentUser } from '../auth/current_user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Invite } from '../invites/invites.model';
import { Project } from '../projects/projects.model';
import { TeamMembership } from '../team_memberships/team_memberships.model';
import { User } from '../users/users.model';
import { CreateTeamInput } from './teams.dto';
import { Team } from './teams.model';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';

@Resolver(of => Team)
export class TeamsResolver {
  constructor(private readonly prisma: PrismaClient) {}

  @Mutation(returns => Team)
  @UseGuards(JwtAuthGuard)
  async createTeam(
    @Args('input') input: CreateTeamInput,
    @CurrentUser() user: User,
  ) {
    return this.prisma.team.create({
      data: {
        name: input.name,
        memberships: {
          create: {
            userId: user.id,
            role: MemberRoles.ADMIN,
          },
        },
      },
    });
  }

  @Query(returns => Team)
  @UseGuards(JwtAuthGuard)
  async team(@Args('id') id: string, @CurrentUser() user: User): Promise<Team> {
    const team = await this.prisma.team.findFirst({
      where: {
        id,
        memberships: {
          some: {
            userId: { equals: user.id },
          },
        },
      },
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return team;
  }

  @Query(returns => [Team])
  @UseGuards(JwtAuthGuard)
  async teams(
    @CurrentUser() user: User,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ) {
    return this.prisma.team.findMany({
      where: {
        memberships: {
          some: {
            userId: { equals: user.id },
          },
        },
      },
      ...paginationArgs(pagination),
    });
  }

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

    return queries.map(q => lookup[q.obj.id]);
  }

  @ResolveLoader(type => Invite)
  async invites(@Parent() queries: LoaderQuery<Team>[]) {
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
