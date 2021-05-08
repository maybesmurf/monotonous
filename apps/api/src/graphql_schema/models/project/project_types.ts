import { extendType, idArg, list, nonNull, objectType, stringArg } from "nexus";
import * as resolvers from "./project_resolvers";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.string("name");
    t.field("team", { type: "Team" });
    t.id("teamId");
    t.field("memberships", { type: list("ProjectMembership") });
    t.field("currentMember", { type: "ProjectMembership" });
  },
});

export const ProjectQueries = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("project", {
      type: "Project",
      args: {
        id: nonNull(idArg()),
      },
      resolve: resolvers.getProject,
    });
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
