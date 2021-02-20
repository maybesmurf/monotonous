import { Static, Type as T } from '@sinclair/typebox';
import { RouteHandler } from 'fastify';

const body = T.Object({
  email: T.String(),
  firstName: T.String(),
  lastName: T.String(),
});

const response = T.Object({
  success: T.Boolean(),
});

export const preRegistrationSchema = {
  body,
  response: {
    [204]: response,
  },
};

export type PreRegistrationBody = Static<typeof body>;
export type PreRegistrationResponse = Static<typeof response>;
export type PreRegistrationHandler = RouteHandler<{
  Body: PreRegistrationBody;
  Reply: PreRegistrationResponse;
}>;
