import { MemberRoles } from "@prisma/client";
import { FieldResolver } from "nexus";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../../errors";

export const addMemberToProject: FieldResolver<
  "Mutation",
  "addMemberToProject"
> = async (_root, { id, projectId }, { currentUser, prisma }) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  const membership = await prisma.teamMembership.findUnique({
    where: { id },
  });

  if (!membership) {
    throw BadRequestError("Team membership doesnt exist");
  }

  const admin = await prisma.teamMembership.findFirst({
    where: {
      role: MemberRoles.ADMIN,
      userId: currentUser.id,
      teamId: membership.teamId,
    },
  });

  if (!admin) {
    throw ForbiddenError();
  }

  return prisma.projectMembership.create({
    data: {
      projectId,
      membershipId: membership.id,
      role: MemberRoles.MEMBER,
    },
  });
};

export const removeUserFromProject: FieldResolver<
  "Mutation",
  "removeUserFromProject"
> = async (_root, { id }, { currentUser, prisma }) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  const admin = await prisma.teamMembership.findFirst({
    where: {
      role: MemberRoles.ADMIN,
      userId: currentUser.id,
    },
  });

  if (!admin) {
    throw ForbiddenError();
  }

  const membership = await prisma.projectMembership.findUnique({
    where: { id },
  });

  if (!membership) {
    throw NotFoundError();
  }

  return prisma.projectMembership.delete({
    where: { id },
  });
};
