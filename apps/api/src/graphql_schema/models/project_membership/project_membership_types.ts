import { objectType } from "nexus";

export const ProjectMembership = objectType({
  name: "ProjectMembership",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.string("name");
    t.field("user", { type: "User" });
  },
});
