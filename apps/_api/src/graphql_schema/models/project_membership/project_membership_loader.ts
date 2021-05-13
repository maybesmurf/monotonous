import { Project, ProjectMembership } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectMembershipLoader = {
  membership: Loader<ProjectMembership, {}, Context>;
  project: Loader<ProjectMembership, {}, Context>;
};

export const ProjectMembershipLoader: ProjectMembershipLoader = {
  membership: async (queries, { prisma }) => {
    const teamMemberships = await prisma.teamMembership.findMany({
      where: { id: { in: queries.map((q) => q.obj.membershipId) } },
    });

    return queries.map((q) => {
      return teamMemberships.find((u) => u.id === q.obj.membershipId);
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
