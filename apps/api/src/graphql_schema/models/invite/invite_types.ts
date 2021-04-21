import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import * as resolvers from "./invite_resolvers";

export const Invite = objectType({
  name: "Invite",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.string("email");
    t.field("project", { type: "Project" });
    t.field("team", { type: "Team" });
  },
});

export const InviteMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createInvite", {
      type: "Invite",
      args: {
        email: nonNull(stringArg()),
        projectId: idArg(),
        teamId: idArg(),
      },
      resolve: resolvers.createInvite,
    });
  },
});
