import { Project } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

const memberships: Loader<Project, {}, Context> = async (
  queries,
  { prisma }
) => {
  return prisma.projectMembersip.findMany({
    where: {
      project: {
        id: { in: queries.map((query) => query.obj.id) },
      },
    },
  });
};

export const ProjectLoader = {
  memberships,
};
