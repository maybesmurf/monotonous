import { prisma } from "@monotonous/sdk-server";
import { builder } from "../builder";
import { DefaultFields } from "../lib/default_fields";
import { UserProfile } from "./user_profile";

interface UserFields extends DefaultFields {
  email: string;
  confirmed: boolean;
}

export const User = builder.objectRef<UserFields>("User").implement({
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
    email: t.exposeString("email", {}),
    confirmed: t.exposeBoolean("confirmed", {}),
  }),
});
