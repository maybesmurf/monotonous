import { MemberRoles } from "@prisma/client";
import { FieldResolver } from "nexus";
import {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../../errors";

export const addUserToProject: FieldResolver<
  "Mutation",
  "addUserToProject"
> = async (_root, { email, teamId, projectId }, { currentUser, prisma }) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  const admin = await prisma.teamMembership.findFirst({
    where: {
      role: MemberRoles.ADMIN,
      userId: currentUser.id,
      teamId,
    },
  });

  if (!admin) {
    throw ForbiddenError();
  }

  if (!email) {
    throw BadRequestError();
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      teamMemberships: {
        where: { teamId },
      },
    },
  });

  if (!user) {
    throw BadRequestError();
  }

  const teamMembership = user.teamMemberships[0];

  if (!teamMembership) {
    throw ForbiddenError();
  }

  return prisma.projectMembership.create({
    data: {
      projectId,
      userId: user.id,
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
