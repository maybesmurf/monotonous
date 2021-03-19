import { User } from "@prisma/client";
import { prisma } from "@monotonous/sdk-server";
import { CustomContext } from "@monotonous/types";

type UserQueries = {
  obj: User;
  params: Record<string, any>;
}[];

export const UserLoader = {
  async profile(queries: UserQueries, ctx: CustomContext) {
    const ids = queries.map((query: { obj: User }) => query.obj.id);

    return prisma.userProfile.findMany({
      where: {
        user: { id: { in: ids } },
      },
    });
  },
};
