import { FieldResolver } from "nexus";

export const getTeamMembership: FieldResolver<
  "Query",
  "teamMembership"
> = async (_root, { id }, { prisma, GqlError }) => {
  if (!id) {
    throw GqlError("Invalid ID");
  }

  return prisma.teamMembership.findFirst({
    where: { id },
    rejectOnNotFound: true,
  });
};

export const listTeamMemberships: FieldResolver<
  "Query",
  "listTeamMemberships"
> = async (_root, _args, { prisma }) => {
  return prisma.teamMembership.findMany();
};
