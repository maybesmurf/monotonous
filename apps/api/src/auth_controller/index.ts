import { FastifyInstance } from 'fastify';

import * as preRegistration from './pre_registration';

export function AuthController(server: FastifyInstance, opts, next: Function) {
  server.post(
    '/pre-registration',
    preRegistration.options,
    preRegistration.handler
  );

  next();
}
