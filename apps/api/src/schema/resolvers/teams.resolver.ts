import { PrismaClient } from '@prisma/client';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';

import { CurrentUser } from '../../auth/decorators/current_user.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { Invite } from '../types/invite.type';
import { Project } from '../types/project.type';
import { TeamMembership } from '../types/team_membership.type';
import { User } from '../types/user.type';
import { Team } from '../types/team.type';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';
import { TeamsLoader } from '../loaders/teams.loader';

@Resolver(of => Team)
export class TeamsResolver extends TeamsLoader {
  @Mutation(returns => Team)
  @UseGuards(JwtAuthGuard)
  async createTeam(@CurrentUser() user: User, @Args('name') name: string) {
    return this.prisma.team.create({
      data: {
        name,
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
  async team(@CurrentUser() user: User, @Args('id') id: string): Promise<Team> {
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
}
