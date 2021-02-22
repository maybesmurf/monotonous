import { EmailQueue } from '@monotonous/sdk-server';
import { nanoid } from 'nanoid';
import { FieldResolver } from 'nexus';

/**
 * @see Query
 * @name preRegistration
 * Create a user and user profile. Send them an email to confirm their email.
 */
export const preRegistration: FieldResolver<
  'Mutation',
  'preRegistration'
> = async (_source, args, { prisma, select }) => {
  const token = nanoid(32);

  await prisma.user.create({
    data: {
      email: args.email,
      profile: {
        create: {
          firstName: args.firstName,
          lastName: args.lastName,
        },
      },
      emailConfirmation: {
        create: { token },
      },
    },
  });

  await EmailQueue.queueEmailConfirmation({
    to: args.email,
    token,
    firstName: args.firstName,
    lastName: args.lastName,
  });

  return { success: true };
};
