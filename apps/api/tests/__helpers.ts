import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import { createServer } from "../src/server";

type TestContext = {
  server: FastifyInstance;
  prisma: PrismaClient;
};

export function createTestContext(): TestContext {
  let prisma = new PrismaClient();
  let server = createServer({ prisma });

  afterAll(async (done) => {
    try {
      await prisma.$disconnect();
      await server.close();
      done();
    } catch (e) {
      console.log(e);
      done();
    }
  });

  return { prisma, server };
}
