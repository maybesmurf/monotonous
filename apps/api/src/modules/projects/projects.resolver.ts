import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { MemberRoles } from '@prisma/client';
import { LoaderQuery, ResolveLoader } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CurrentUser } from '../auth/current_user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ProjectMembership } from '../project_memberships/project_memberships.model';
import { ProjectMembershipsResolver } from '../project_memberships/project_memberships.resolver';
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

  @ResolveLoader(type => ProjectMembership)
  async currentMember(
    @Parent() queries: LoaderQuery<Project>[],
    @CurrentUser() user: User,
  ) {
    const memberships = await this.prisma.projectMembership.findMany({
      where: {
        project: {
          id: { in: queries.map(q => q.obj.id) },
        },
      },
      include: {
        membership: true,
      },
    });

    return queries.map(q => {
      return memberships.find(m => {
        return m.projectId === q.obj.id && m.membership.userId === user.id;
      });
    });
  }

  @ResolveLoader(type => ProjectMembership)
  async memberships(@Parent() queries: LoaderQuery<Project>[]) {
    const memberships = await this.prisma.projectMembership.findMany({
      where: {
        projectId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = memberships.reduce((acc, m) => {
      const existing = acc[m.projectId] || [];
      acc[m.projectId] = [...existing, m];
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id] || []);
  }
}
