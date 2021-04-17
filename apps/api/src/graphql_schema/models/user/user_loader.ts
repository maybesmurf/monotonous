import { User } from "@prisma/client";
import { Loader } from "mercurius";
import { Context } from "../../custom_context";

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
