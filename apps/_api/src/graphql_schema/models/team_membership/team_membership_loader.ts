import { TeamMembership } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type TeamMembershipLoader = {
  user: Loader<TeamMembership, {}, Context>;
  team: Loader<TeamMembership, {}, Context>;
};

export const TeamMembershipLoader: TeamMembershipLoader = {
  user: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.userId);
    const records = await prisma.user.findMany({
      where: { id: { in: ids } },
    });

    return queries.map((q) => records.find((r) => r.id === q.obj.userId));
  },

  team: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.teamId);
    const records = await prisma.team.findMany({
      where: { id: { in: ids } },
    });

    return queries.map((q) => records.find((r) => r.id === q.obj.teamId));
  },
};
