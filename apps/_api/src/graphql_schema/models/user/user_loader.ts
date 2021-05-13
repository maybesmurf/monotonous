import { User } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

type UserLoader = {
  profile: Loader<User, {}, Context>;
};

export const UserLoader: UserLoader = {
  profile: async (queries, { prisma }) => {
    const ids = queries.map((q) => q.obj.id);
    const records = await prisma.userProfile.findMany({
      where: { user: { id: { in: ids } } },
    });

    return queries.map((q) => records.find((r) => r.userId === q.obj.id));
  },
};
