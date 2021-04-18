import { objectType } from "nexus";

export const PaginationParams = objectType({
  name: "PaginationParams",
  definition(t) {
    t.id("cursor");
    t.int("take");
    t.int("skip");
  },
});
