import { extendType, list, nonNull, objectType } from "nexus";
import * as resolvers from "./team_membership_resolvers";

export const TeamMembership = objectType({
  name: "TeamMembership",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.field("status", { type: "MembershipStatuses" });
    t.nonNull.field("role", { type: "TeamRoles" });
    t.field("user", { type: "User" });
    t.field("team", { type: "Team" });
  },
});

export const TeamMembershipQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("teamMembership", {
      type: "TeamMembership",
      args: {
        id: nonNull("String"),
      },
      resolve: resolvers.getTeamMembership,
    });

    t.nonNull.field("listTeamMembersips", {
      type: list("TeamMembership"),
      resolve: resolvers.listTeamMemberships,
    });
  },
});
