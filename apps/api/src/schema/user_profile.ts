import { builder } from "../builder";
import { DefaultFields } from "../lib/default_fields";
import { User } from "./user";

interface UserProfileFields extends DefaultFields {
  firstName: string;
  lastName: string;
  fullName?: string;
  userId: string;
}

export const UserProfile = builder
  .objectRef<UserProfileFields>("UserProfile")
  .implement({
    fields: (t) => ({
      id: t.exposeID("id", {}),
      createdAt: t.field({
        type: "Date",
        resolve: ({ createdAt }) => createdAt,
      }),
      updatedAt: t.field({
        type: "Date",
        resolve: ({ updatedAt }) => updatedAt,
      }),
      firstName: t.exposeString("firstName", {}),
      lastName: t.exposeString("lastName", {}),
      fullName: t.string({
        resolve: (parent) => `${parent.firstName} ${parent.lastName}`,
      }),
      userId: t.exposeID("userId", {}),
    }),
  });

builder.objectField(UserProfile, "user", (t) =>
  t.loadable({
    type: User,
    load: async (ids: string[], { prisma }) =>
      await prisma.user.findMany({
        where: { id: { in: ids } },
      }),
    resolve: ({ userId }) => userId,
  })
);
