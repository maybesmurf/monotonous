import {
  enumType,
  extendType,
  idArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
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

export const InviteQueries = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("listInvites", {
      type: list("Invite"),
      args: {
        teamId: idArg(),
        projectId: idArg(),
        email: stringArg(),
      },
      resolve: resolvers.listInvites,
    });
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

    t.nonNull.field("deleteInvite", {
      type: "SuccessResponse",
      args: {
        id: nonNull(idArg()),
      },
      resolve: resolvers.deleteInvite,
    });
  },
});
