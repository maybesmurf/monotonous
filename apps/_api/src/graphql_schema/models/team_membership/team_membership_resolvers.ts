import { FieldResolver } from "nexus";
import { BadRequestError } from "../../errors";

export const getTeamMembership: FieldResolver<
  "Query",
  "teamMembership"
> = async (_root, { id }, { prisma, GqlError }) => {
  if (!id) {
    throw BadRequestError("ID is required");
  }

  return prisma.teamMembership.findFirst({
    where: { id },
    rejectOnNotFound: true,
  });
};

export const listTeamMemberships: FieldResolver<
  "Query",
  "listTeamMemberships"
> = async (_root, { query, cursor, take }, { prisma }) => {
  if (!query) {
    throw BadRequestError();
  }

  return prisma.teamMembership.findMany({
    where: query
      ? {
          user: {
            OR: [
              { email: { contains: query, mode: "insensitive" } },
              {
                profile: {
                  OR: [
                    { firstName: { contains: query, mode: "insensitive" } },
                    { lastName: { contains: query, mode: "insensitive" } },
                  ],
                },
              },
            ],
          },
        }
      : undefined,
    cursor: cursor ? { id: cursor } : undefined,
    take: take ?? 10,
  });
};
