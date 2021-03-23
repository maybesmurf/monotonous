// tests/__helpers.ts
import { prisma } from "@monotonous/sdk-server";
import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import { join } from "path";
import { Database } from "sqlite3";

type TestContext = {
  server: FastifyInstance;
  prisma: PrismaClient;
};

const prismaBinary = join(
  __dirname,
  "../../../",
  "node_modules",
  ".bin",
  "prisma"
);

export function createTestContext(): TestContext {
  let ctx = {} as TestContext;
  const prismaCtx = prismaTestContext();

  beforeEach(async () => {
    Object.assign(ctx, {
      prisma: await prismaCtx.before(),
    });
  });

  afterEach(async () => {
    await prismaCtx.after();
  });

  return ctx;
}

function prismaTestContext() {
  let prismaClient: null | PrismaClient = null;

  return {
    async before() {
      // Run the migrations to ensure our schema has the required structure
      execSync(`${prismaBinary} db push --preview-feature`);

      // Constuct a new Prisma Client connected to the generated schema
      prismaClient = new PrismaClient();

      return prismaClient;
    },
    async after() {
      const client = new Database(":memory:");
      // Drop the schema after the tests have completed
      client.close();

      // Release the Prisma Client connection
      await prismaClient?.$disconnect();
    },
  };
}
