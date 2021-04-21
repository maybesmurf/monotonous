import { FieldResolver } from "nexus";

export const createProject: FieldResolver<"Mutation", "createProject"> = async (
  _root,
  { teamId, name },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser) throw GqlError("Unauthorized");

  return prisma.project.create({
    data: {
      name,
      teamId,
      memberships: {
        create: {
          userId: currentUser.id,
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
