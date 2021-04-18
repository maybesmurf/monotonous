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
  return prisma.team.create({
    data: {
      name,
      memberships: {
        create: {
          userId: "cknmiufy20009se54pfxmuidz",
          status: MembershipStatuses.ACCEPTED,
          role: TeamRoles.ADMIN,
        },
      },
    },
  });
};

export const listTeams: FieldResolver<"Query", "listTeams"> = async (
  _root,
  _args,
  { prisma }
) => {
  return prisma.team.findMany();
};
