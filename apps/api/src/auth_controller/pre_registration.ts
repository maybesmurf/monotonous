import { RouteShorthandOptions } from 'fastify';
import {
  PreRegistrationHandler,
  preRegistrationSchema,
} from '@monotonous/types';
import { EmailQueue, prisma } from '@monotonous/sdk-server';
import { nanoid } from 'nanoid';

export const options: RouteShorthandOptions = {
  schema: preRegistrationSchema,
};

export const handler: PreRegistrationHandler = async (request, reply) => {
  const token = nanoid(48);

  const user = await prisma.user.create({
    data: {
      email: request.body.email,
      profile: {
        create: {
          firstName: request.body.firstName,
          lastName: request.body.lastName,
        },
      },
      emailConfirmation: {
        create: { token },
      },
    },
  });

  await EmailQueue.queueEmailConfirmation({
    to: request.body.email,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    token,
  });

  reply.send({ success: true });
};
