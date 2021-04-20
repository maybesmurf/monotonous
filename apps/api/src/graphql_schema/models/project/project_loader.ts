import { Project } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectLoader = {
  memberships: Loader<Project, {}, Context>;
};

export const ProjectLoader: ProjectLoader = {
  memberships: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.id);
    const records = await prisma.projectMembersip.findMany({
      where: { project: { id: { in: ids } } },
    });

    return queries.map((q) => records.filter((r) => r.projectId === q.obj.id));
  },
};
