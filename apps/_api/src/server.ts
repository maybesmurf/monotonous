import fastify from "fastify";
import cookie from "fastify-cookie";
import merc from "mercurius";
import { Logger } from "pino";
import { AuthService, prisma, redis } from "@monotonous/sdk-server";
import { config } from "@monotonous/conf";

import { loaders } from "./graphql_schema/loaders";
import { schema } from "./graphql_schema";
import { PrismaClient } from ".prisma/client";
import { CustomContext } from "./graphql_schema/custom_context";
import { logger } from "handlebars";

export function createServer(params: { prisma: PrismaClient; logger: Logger }) {
  const server = fastify();

  server.register(cookie);

  server.register(merc, {
    async context(request, _reply): Promise<CustomContext> {
      const cookie = request.cookies[config.auth.cookiePrefix];
      const claims = await AuthService.verifyJwt(cookie);

      let currentUser = claims
        ? await params.prisma.user.findFirst({
            where: {
              id: claims.userId,
              confirmed: true,
            },
          })
        : null;

      return {
        request,
        currentUser,
        logger: params.logger,
        prisma: params.prisma,
        GqlError(message: string, extensions?: object) {
          return new merc.ErrorWithProps(message, extensions);
        },
      };
    },
    schema,
    loaders,
    graphiql: process.env.NODE_ENV !== "production" ? "playground" : false,
    jit: 1,
    cache: true,
  });

  server.addHook("onClose", async (_instance, done) => {
    logger.debug("Closing server. Disconnecting prisma and redis...");
    await prisma.$disconnect();
    await redis.quit();
    logger.debug("Server closed.");
    done();
  });

  return server;
}
