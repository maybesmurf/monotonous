import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import * as resolvers from "./project_membership_resolvers";

export const ProjectMembership = objectType({
  name: "ProjectMembership",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.field("role", { type: "MemberRoles" });
    t.field("membership", { type: "TeamMembership" });
    t.id("membershipId");
    t.field("project", { type: "Project" });
    t.id("projectId");
  },
});

export const ProjectMembershipMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addMemberToProject", {
      type: nonNull("ProjectMembership"),
      args: {
        id: nonNull(stringArg()),
        projectId: nonNull(stringArg()),
      },
      resolve: resolvers.addMemberToProject,
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
