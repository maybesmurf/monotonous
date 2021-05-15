import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, ArgsType, Parent, Query, Resolver } from '@nestjs/graphql';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { User } from '../users/users.model';
import { TeamMembership } from './team_memberships.model';

@Resolver(of => TeamMembership)
export class TeamMembershipsResolver {
  constructor(private readonly prisma: PrismaService) {}

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

  @ResolveLoader(type => User)
  async user(@Parent() queries: LoaderQuery<TeamMembership>[]) {
    const users = await this.prisma.user.findMany({
      where: {
        id: { in: queries.map(q => q.obj.userId) },
      },
    });

    const lookup = users.reduce((acc, u) => {
      acc[u.id] = u;
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.userId]);
  }
}
