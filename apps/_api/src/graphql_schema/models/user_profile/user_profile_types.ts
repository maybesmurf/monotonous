import { objectType } from "nexus";

export const UserProfile = objectType({
  name: "UserProfile",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.field("fullName", {
      type: "String",
      resolve(user) {
        return `${user.firstName} ${user.lastName}`;
      },
    });
  },
});
