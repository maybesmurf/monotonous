import { extendType, objectType } from "nexus";
import { shields } from "../../../lib/shield_rules";
import * as resolvers from "./user_resolvers";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("email");
    t.nonNull.boolean("confirmed");
    t.field("profile", { type: "UserProfile" });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
      shield: shields.auth,
      resolve: resolvers.me,
    });
  },
});
