import { Parent, Resolver } from '@nestjs/graphql';
import { ResolveLoader, LoaderQuery } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ProjectMembership } from '../types/project_membership.type';
import { TeamMembership } from '../types/team_membership.type';

@Resolver(of => ProjectMembership)
export class ProjectMembershipsLoader {
  constructor(readonly prisma: PrismaService) {}

  @ResolveLoader(type => TeamMembership)
  async membership(@Parent() queries: LoaderQuery<ProjectMembership>[]) {
    const memberships = await this.prisma.teamMembership.findMany({
      where: {
        id: { in: queries.map(q => q.obj.membershipId) },
      },
    });

    const lookup = memberships.reduce((acc, m) => {
      acc[m.id] = m;
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.membershipId]);
  }
}
