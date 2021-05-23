import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { TeamMembershipsLoader } from '../loaders/team_memberships.loader';
import { TeamMembership } from '../types/team_membership.type';

@Resolver(of => TeamMembership)
export class TeamMembershipsResolver extends TeamMembershipsLoader {
  @Query(returns => TeamMembership)
  @UseGuards(JwtAuthGuard)
  async teamMembership(@Args('id') id: string): Promise<TeamMembership> {
    const membership = await this.prisma.teamMembership.findFirst({
      where: { id },
    });

    if (!membership) {
      throw new NotFoundException('Couldnt find that team membership');
    }

    return membership;
  }

  @Query(returns => [TeamMembership])
  @UseGuards(JwtAuthGuard)
  async teamMemberships(
    @Args('query', { nullable: true }) query?: string,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ): Promise<TeamMembership[]> {
    return this.prisma.teamMembership.findMany({
      where: query
        ? {
            user: {
              OR: [
                { email: { contains: query, mode: 'insensitive' } },
                {
                  profile: {
                    OR: [
                      { firstName: { contains: query, mode: 'insensitive' } },
                      { lastName: { contains: query, mode: 'insensitive' } },
                    ],
                  },
                },
              ],
            },
          }
        : undefined,
      ...paginationArgs(pagination),
    });
  }
}
