import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.date("createdAt");
    t.nonNull.date("updatedAt");
    t.nonNull.string("name");
  },
});
