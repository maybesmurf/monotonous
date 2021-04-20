import { TeamMembership } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type TeamMembershipLoader = {
  user: Loader<TeamMembership, {}, Context>;
  team: Loader<TeamMembership, {}, Context>;
};

export const TeamMembershipLoader: TeamMembershipLoader = {
  user: async (queries, { prisma }) => {
    return prisma.user.findMany({
      where: {
        id: { in: queries.map((query) => query.obj.userId) },
      },
    });
  },

  team: async (queries, { prisma }) => {
    return prisma.team.findMany({
      where: {
        id: { in: queries.map((query) => query.obj.teamId) },
      },
    });
  },
};
