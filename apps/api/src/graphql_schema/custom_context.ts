import mercurius, { MercuriusContext } from "mercurius";
import { FastifyRequest } from "fastify";
import { PrismaClient, User } from "@prisma/client";

export interface CustomContext {
  request: FastifyRequest;
  prisma: PrismaClient;
  currentUser: User | null;
  GqlError(message: string, extensions?: object): mercurius.ErrorWithProps;
}

export interface Context extends MercuriusContext, CustomContext {}
