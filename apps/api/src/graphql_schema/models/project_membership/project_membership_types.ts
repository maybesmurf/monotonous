import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import * as resolvers from "./project_membership_resolvers";

export const ProjectMembership = objectType({
  name: "ProjectMembership",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.field("role", { type: "MemberRoles" });
    t.field("user", { type: "User" });
    t.id("userId");
    t.field("project", { type: "Project" });
    t.id("projectId");
  },
});

export const ProjectMembershipMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addUserToProject", {
      type: nonNull("ProjectMembership"),
      args: {
        email: nonNull(stringArg()),
        teamId: nonNull(idArg()),
        projectId: nonNull(idArg()),
      },
      resolve: resolvers.addUserToProject,
    });

    t.nonNull.field("removeUserFromProject", {
      type: nonNull("ProjectMembership"),
      args: {
        id: nonNull(idArg()),
      },
      resolve: resolvers.removeUserFromProject,
    });
  },
});
