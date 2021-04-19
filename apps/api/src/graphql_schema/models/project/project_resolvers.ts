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
