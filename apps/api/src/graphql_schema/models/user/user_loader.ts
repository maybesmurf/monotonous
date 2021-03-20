import { User } from "@prisma/client";
import { Context } from "@monotonous/types";
import { Loader } from "mercurius";

type UserLoader = {
  User: {
    profile: Loader<User, {}, Context>;
  };
};

export const UserLoader: UserLoader = {
  User: {
    async profile(queries, { prisma }) {
      return prisma.userProfile.findMany({
        where: {
          user: {
            id: {
              in: queries.map((query) => query.obj.id),
            },
          },
        },
      });
    },
  },
};
