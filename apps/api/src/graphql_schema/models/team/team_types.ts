import { extendType, objectType, nonNull, list } from "nexus";
import * as resolvers from "./team_resolvers";

export const Team = objectType({
  name: "Team",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.string("name");
    t.field("memberships", { type: "TeamMembership" });
    t.field("projects", { type: "Project" });
  },
});

export const TeamQueries = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("listTeams", {
      type: list("Team"),
      resolve: resolvers.listTeams,
    });
  },
});

export const TeamMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createTeam", {
      type: "Team",
      args: {
        name: nonNull("String"),
      },
      resolve: resolvers.createTeam,
    });
  },
});
