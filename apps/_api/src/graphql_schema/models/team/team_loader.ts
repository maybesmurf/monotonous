import { Team } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type TeamLoader = {
  memberships: Loader<Team, {}, Context>;
  projects: Loader<Team, {}, Context>;
};

export const TeamLoader: TeamLoader = {
  memberships: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.id);
    const records = await prisma.teamMembership.findMany({
      where: { team: { id: { in: ids } } },
    });

    return queries.map((q) => records.filter((r) => r.teamId === q.obj.id));
  },

  projects: async (queries, { currentUser, prisma }) => {
    const records = await prisma.project.findMany({
      where: {
        team: { id: { in: queries.map((q) => q.obj.id) } },
        memberships: {
          some: {
            membership: {
              userId: currentUser!.id,
            },
          },
        },
      },
    });

    return queries.map((q) => {
      return records.filter((r) => r.teamId === q.obj.id);
    });
  },
};
