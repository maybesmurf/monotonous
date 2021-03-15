import { FieldResolver } from "nexus";
import { nanoid } from "nanoid";
import { config } from "@monotonous/conf";
import { EmailQueue, redis } from "@monotonous/sdk-server";

/**
 * @see Mutation
 * @name register
 * Create a user and user profile.
 * Send them an email to confirm their email.
 */
export const register: FieldResolver<"Mutation", "register"> = async (
  _source,
  { email, firstName, lastName },
  { prisma }
) => {
  const token = nanoid(32);

  const user = await prisma.user.create({
    data: {
      email,
      profile: {
        create: {
          firstName,
          lastName,
        },
      },
      emailConfirmation: {
        create: { token },
      },
    },
  });

  await EmailQueue.queueEmailConfirmation({
    to: email,
    token,
    firstName,
    lastName,
  });

  return user;
};

/**
 * @see Mutation
 * @name confirmEmail
 * Confirm a users email and update their profile if they change anything.
 */
export const confirmEmail: FieldResolver<"Mutation", "confirmEmail"> = async (
  _source,
  { token, email, firstName, lastName },
  { prisma, GqlError }
) => {
  const confirmation = await prisma.emailConfirmation.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!confirmation || confirmation.user.email !== email) {
    throw GqlError("Invalid token");
  }

  return prisma.user.update({
    where: {
      id: confirmation.userId,
    },
    data: {
      profile: {
        update: {
          firstName,
          lastName,
        },
      },
    },
  });
};

/**
 * @see Mutation
 * @name requestLogin
 * Request an email be sent with a token to log the user in.
 */
export const requestLogin: FieldResolver<"Mutation", "requestLogin"> = async (
  _source,
  { email },
  { prisma, GqlError }
) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw GqlError("Invalid email");
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit number
  await redis.set(code, user.id, "EX", config.auth.loginTTL);

  // TODO - send login token email

  return { success: true };
};

/**
 * @see Mutation
 * @name login
 * Log a user in with the token that was emailed to them.
 */
export const login: FieldResolver<"Mutation", "login"> = async (
  _source,
  { token },
  { prisma, GqlError }
) => {
  const id = await redis.get(token);

  if (!id) {
    throw GqlError("Invalid token");
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw GqlError("User doesnt exist");
  }

  return user;
};
