import { Project, ProjectMembership } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectMembershipLoader = {
  user: Loader<ProjectMembership, {}, Context>;
  project: Loader<ProjectMembership, {}, Context>;
  role: Loader<ProjectMembership, {}, Context>;
};

export const ProjectMembershipLoader: ProjectMembershipLoader = {
  user: async (queries, { prisma }) => {
    const users = await prisma.user.findMany({
      where: { id: { in: queries.map((q) => q.obj.userId) } },
    });

    return queries.map((q) => {
      return users.find((u) => u.id === q.obj.userId);
    });
  },

  project: async (queries, { prisma }) => {
    const projects = await prisma.project.findMany({
      where: { id: { in: queries.map((q) => q.obj.projectId) } },
    });

    return queries.map((q) => {
      return projects.find((p) => p.id === q.obj.projectId);
    });
  },
};
