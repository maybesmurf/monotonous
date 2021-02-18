import mercurius, { MercuriusContext } from 'mercurius';
import { FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { PrismaSelect } from '@paljs/plugins';
export interface CustomContext {
    request: FastifyRequest;
    prisma: PrismaClient;
    GqlError(message: string, extensions?: object): mercurius.ErrorWithProps;
    userId?: string;
}
export interface Context extends MercuriusContext, CustomContext {
    select: PrismaSelect['value'];
}
//# sourceMappingURL=graphql_context.d.ts.map