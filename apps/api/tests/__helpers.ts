// tests/__helpers.ts
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
  let prisma: PrismaClient | undefined;
  let db: Database | null;

  beforeEach(async (done) => {
    prisma = new PrismaClient();
    Object.assign(ctx, { prisma });
    done();
  });

  afterEach(async (done) => {
    db?.close();
    await prisma?.$disconnect();
    done();
  });

  return ctx;
}
