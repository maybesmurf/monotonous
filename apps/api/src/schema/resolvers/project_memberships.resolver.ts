import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MemberRoles } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CurrentUser } from '../../auth/decorators/current_user.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { User } from '../types/user.type';
import { AddMemberToProjectInput } from '../input_types/add_member_to_project.input';
import { ProjectMembership } from '../types/project_membership.type';
import { ProjectMembershipsLoader } from '../loaders/project_memberships.loader';

@Resolver(of => ProjectMembership)
export class ProjectMembershipsResolver extends ProjectMembershipsLoader {
  @Mutation(returns => ProjectMembership)
  @UseGuards(JwtAuthGuard)
  async addMemberToProject(
    @CurrentUser() user: User,
    @Args('input') input: AddMemberToProjectInput,
  ) {
    const membership = await this.prisma.teamMembership.findUnique({
      where: { id: input.teamMembershipId },
    });

    if (!membership) {
      throw new BadRequestException('Team membership doesnt exist');
    }

    const admin = await this.prisma.teamMembership.findFirst({
      where: {
        role: MemberRoles.ADMIN,
        userId: user.id,
        teamId: membership.teamId,
      },
    });

    if (!admin) {
      throw new ForbiddenException();
    }

    return this.prisma.projectMembership.create({
      data: {
        projectId: input.projectId,
        membershipId: membership.id,
        role: MemberRoles.MEMBER,
      },
    });
  }

  @Mutation(returns => ProjectMembership)
  @UseGuards(JwtAuthGuard)
  async removeMemberFromProject(
    @CurrentUser() user: User,
    @Args('projectMembershipId') projectMembershipId: string,
  ) {
    const admin = await this.prisma.teamMembership.findFirst({
      where: {
        role: MemberRoles.ADMIN,
        userId: user.id,
      },
    });

    if (!admin) {
      throw new ForbiddenException();
    }

    const membership = await this.prisma.projectMembership.findUnique({
      where: { id: projectMembershipId },
    });

    if (!membership) {
      throw new NotFoundException();
    }

    return this.prisma.projectMembership.delete({
      where: { id: projectMembershipId },
    });
  }
}
