import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CurrentUser } from '../auth/current_user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { User } from '../users/users.model';
import { CreateProjectInput } from './projects.dto';
import { Project } from './projects.model';

@Resolver(of => Project)
export class ProjectsResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(returns => Project)
  @UseGuards(JwtAuthGuard)
  async createProject(
    @CurrentUser() user: User,
    @Args('input') input: CreateProjectInput,
  ) {
    return this.prisma.project.create({
      data: {
        name: input.name,
        teamId: input.teamId,
        memberships: {
          create: {
            membership: {
              connect: {
                userId_teamId: {
                  teamId: input.teamId,
                  userId: user.id,
                },
              },
            },
            role: MemberRoles.ADMIN,
          },
        },
      },
    });
  }

  @Query(returns => Project)
  @UseGuards(JwtAuthGuard)
  async project(
    @CurrentUser() user: User,
    @Args('id') id: string,
  ): Promise<Project> {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
        memberships: {
          some: {
            membership: {
              userId: user.id,
            },
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return project;
  }
}
