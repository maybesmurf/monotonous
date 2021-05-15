import { MemberRoles } from "@prisma/client";
import { FieldResolver } from "nexus";
import { UnauthorizedError } from "../../errors";

export const createProject: FieldResolver<"Mutation", "createProject"> = async (
  _root,
  { teamId, name },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  return prisma.project.create({
    data: {
      name,
      teamId,
      memberships: {
        create: {
          membership: {
            connect: {
              userId_teamId: {
                teamId,
                userId: currentUser.id,
              },
            },
          },
          role: MemberRoles.ADMIN,
        },
      },
    },
  });
};

export const getProject: FieldResolver<"Query", "getProject"> = async (
  _root,
  { id },
  { prisma }
) => {
  return prisma.project.findFirst({
    where: { id },
    rejectOnNotFound: true,
  });
};
