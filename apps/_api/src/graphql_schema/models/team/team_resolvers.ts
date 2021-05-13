import { MemberRoles } from "@prisma/client";
import { FieldResolver } from "nexus";
import { UnauthorizedError } from "../../errors";

/*
 * @name createTeam
 * Creates a team
 */
export const createTeam: FieldResolver<"Mutation", "createTeam"> = async (
  _root,
  { name },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  return prisma.team.create({
    data: {
      name,
      memberships: {
        create: {
          userId: currentUser.id,
          role: MemberRoles.ADMIN,
        },
      },
    },
  });
};

/**
 * @name getTeam
 * Get a team by id.
 */
export const getTeam: FieldResolver<"Query", "team"> = async (
  _root,
  { id },
  { currentUser, prisma }
) => {
  return prisma.team.findFirst({
    where: {
      id,
      memberships: {
        some: {
          userId: { equals: currentUser?.id },
        },
      },
    },
    rejectOnNotFound: true,
  });
};

/**
 * @name listTeams
 * Get a list of filtered teams.
 */
export const listTeams: FieldResolver<"Query", "listTeams"> = async (
  _root,
  { cursor, take, skip },
  { currentUser, prisma }
) => {
  return prisma.team.findMany({
    where: {
      memberships: {
        some: {
          userId: { equals: currentUser?.id },
        },
      },
    },
    cursor: cursor ? { id: cursor } : undefined,
    take: take ?? 10,
    skip: skip ?? 0,
  });
};
