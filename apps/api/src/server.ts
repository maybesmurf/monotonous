import fastify, { FastifyRequest } from 'fastify';
import cookie from 'fastify-cookie';
import merc from 'mercurius';
import { CustomContext } from '@monotonous/types';
import { prisma } from '@monotonous/sdk-server';

import { schema } from './graphql_schema';
import { AuthController } from './auth_controller';

export function createServer() {
  const server = fastify();

  server.register(cookie);

  server.register(merc, {
    context,
    schema,
    persistedQueryProvider: merc.persistedQueryDefaults.automatic(5000),
    allowBatchedQueries: true,
    subscription: true,
    graphiql: process.env.NODE_ENV !== 'production' ? 'playground' : false,
    jit: 1,
  });

  server.register(AuthController);

  return server;
}

function context(request: FastifyRequest): CustomContext {
  return {
    request,
    prisma,
    GqlError(message: string, extensions?: object) {
      return new merc.ErrorWithProps(message, extensions);
    },
  };
}
