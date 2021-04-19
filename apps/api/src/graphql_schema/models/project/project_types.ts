import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import * as resolvers from "./project_resolvers";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.string("name");
    // t.field('memberships', { type: 'ProjectMembership' })
  },
});

export const ProjectMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createProject", {
      type: "Project",
      args: {
        teamId: nonNull(idArg()),
        name: nonNull(stringArg()),
      },
      resolve: resolvers.createProject,
    });
  },
});
