import { Project } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectLoader = {
  memberships: Loader<Project, {}, Context>;
};

export const ProjectLoader: ProjectLoader = {
  memberships: async (queries, { prisma }) => {
    return prisma.projectMembersip.findMany({
      where: {
        project: {
          id: { in: queries.map((query) => query.obj.id) },
        },
      },
    });
  },
};
