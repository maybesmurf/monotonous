import { Parent, Resolver } from '@nestjs/graphql';
import { ResolveLoader, LoaderQuery } from 'nestjs-mercurius';
import { CurrentUser } from 'src/auth/decorators/current_user.decorator';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Project } from '../types/project.type';
import { ProjectMembership } from '../types/project_membership.type';
import { User } from '../types/user.type';

@Resolver(of => Project)
export class ProjectsLoader {
  constructor(readonly prisma: PrismaService) {}

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

    const lookup = {};
    for (const m of memberships) {
      const existing = lookup[m.projectId] || [];
      lookup[m.projectId] = [...existing, m];
    }

    return queries.map(q => lookup[q.obj.id] || []);
  }
}
