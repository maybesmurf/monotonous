import { Team, TeamMembership, User } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

const user: Loader<TeamMembership, {}, Context> = async (
  queries,
  { prisma }
) => {
  return prisma.user.findMany({
    where: {
      id: { in: queries.map((query) => query.obj.userId) },
    },
  });
};

const team: Loader<TeamMembership, {}, Context> = async (
  queries,
  { prisma }
) => {
  return prisma.team.findMany({
    where: {
      id: { in: queries.map((query) => query.obj.teamId) },
    },
  });
};

export const TeamMembershipLoader = {
  user,
  team,
};
