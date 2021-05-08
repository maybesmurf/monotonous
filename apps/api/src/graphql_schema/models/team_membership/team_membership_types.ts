import {
  extendType,
  idArg,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import * as resolvers from "./team_membership_resolvers";

export const TeamMembership = objectType({
  name: "TeamMembership",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.field("role", { type: "MemberRoles" });
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

    t.nonNull.field("listTeamMemberships", {
      type: list("TeamMembership"),
      args: {
        query: stringArg(),
        cursor: stringArg(),
        take: intArg(),
      },
      resolve: resolvers.listTeamMemberships,
    });
  },
});
