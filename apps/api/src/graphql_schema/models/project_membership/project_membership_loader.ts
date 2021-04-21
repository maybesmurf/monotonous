import { ProjectMembership } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type ProjectMembershipLoader = {
  user: Loader<ProjectMembership, {}, Context>;
};

export const ProjectMembershipLoader: ProjectMembershipLoader = {
  user: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.userId);
    const records = await prisma.user.findMany({
      where: { id: { in: ids } },
    });

    return queries.map((q) => records.find((r) => r.id === q.obj.userId));
  },
};
