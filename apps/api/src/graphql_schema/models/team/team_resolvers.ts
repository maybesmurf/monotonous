import { MembershipStatuses, TeamRoles } from ".prisma/client";
import { FieldResolver } from "nexus";

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
    throw GqlError("Unauthorized");
  }

  return prisma.team.create({
    data: {
      name,
      memberships: {
        create: {
          userId: currentUser.id,
          status: MembershipStatuses.ACCEPTED,
          role: TeamRoles.ADMIN,
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
  { prisma }
) => {
  return prisma.team.findFirst({
    where: { id },
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
  { prisma }
) => {
  return prisma.team.findMany({
    cursor: cursor ? { id: cursor } : undefined,
    take: take ?? 10,
    skip: skip ?? 0,
  });
};
