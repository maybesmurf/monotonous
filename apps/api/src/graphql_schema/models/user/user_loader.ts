import { User } from "@prisma/client";
import { Context } from "@monotonous/types";
import { Loader } from "mercurius";

const profile: Loader<User, {}, Context> = async (queries, { prisma }) => {
  return prisma.userProfile.findMany({
    where: {
      user: {
        id: { in: queries.map((query) => query.obj.id) },
      },
    },
  });
};

export const UserLoader = {
  profile,
};
