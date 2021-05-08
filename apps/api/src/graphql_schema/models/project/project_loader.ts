import { Project } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectLoader = {
  memberships: Loader<Project, {}, Context>;
  currentMember: Loader<Project, {}, Context>;
};

export const ProjectLoader: ProjectLoader = {
  memberships: async (queries, { prisma }) => {
    const memberships = await prisma.projectMembership.findMany({
      where: {
        project: { id: { in: queries.map((q) => q.obj.id) } },
      },
    });

    return queries.map((q) => {
      return memberships.filter((m) => m.projectId === q.obj.id);
    });
  },

  currentMember: async (queries, { currentUser, prisma }) => {
    const memberships = await prisma.projectMembership.findMany({
      where: {
        project: { id: { in: queries.map((q) => q.obj.id) } },
      },
    });

    return queries.map((q) => {
      return memberships.find((m) => {
        return m.projectId === q.obj.id && m.userId === currentUser!.id;
      });
    });
  },
};
