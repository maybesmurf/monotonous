import { Invite } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type InviteLoader = {
  invitedBy: Loader<Invite, {}, Context>;
  project: Loader<Invite, {}, Context>;
  team: Loader<Invite, {}, Context>;
};

export const InviteLoader: InviteLoader = {
  invitedBy: async (queries, { prisma }) => {
    const users = await prisma.user.findMany({
      where: {
        id: { in: queries.map((q) => q.obj.invitedById) },
      },
    });

    return queries.map((q) => {
      return users.find((u) => u.id === q.obj.invitedById);
    });
  },

  project: async (queries, { prisma }) => {
    const projects = await prisma.project.findMany({
      where: {
        id: {
          in: queries.map((q) => q.obj.projectId).filter(Boolean) as string[],
        },
      },
    });

    return queries.map((q) => {
      return projects.find((p) => p.id === q.obj.projectId);
    });
  },

  team: async (queries, { prisma }) => {
    const teams = await prisma.team.findMany({
      where: {
        id: {
          in: queries.map((q) => q.obj.teamId).filter(Boolean) as string[],
        },
      },
    });

    return queries.map((q) => {
      return teams.find((t) => t.id === q.obj.teamId);
    });
  },
};
