// tests/__helpers.ts
import { FastifyInstance } from "fastify";
import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";
import { join } from "path";
import { GenericContainer, StartedTestContainer } from "testcontainers";
import { createServer } from "../src/server";

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

const pg = new GenericContainer("postgres:alpine")
  .withEnv("POSTGRES_USER", "test")
  .withEnv("POSTGRES_PASSWORD", "test")
  .withExposedPorts(5432);

export function createTestContext(): TestContext {
  let ctx = {} as TestContext;
  let db: StartedTestContainer;
  let prisma: PrismaClient;
  let server: FastifyInstance;

  beforeEach(async (done) => {
    db = await pg.start();

    const url = `postgres://test:test@localhost:${db.getMappedPort(5432)}/test`;
    process.env.DATABASE_URL = url;

    execSync(
      `DATABASE_URL=${url} ${prismaBinary} db push --skip-generate --preview-feature`
    );
    prisma = new PrismaClient();
    server = createServer({ prisma });

    Object.assign(ctx, { prisma, server });

    done();
  });

  afterEach(async (done) => {
    try {
      await prisma.$disconnect();
      await db.stop({ removeVolumes: true });
      await server.close();
      done();
    } catch (e) {
      console.log(e);
      done();
    }
  });

  return ctx;
}
