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

  beforeEach(async (done) => {
    await prisma.$executeRaw(`
      DO $$ DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
          EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || 'CASCADE';
        END LOOP;
      END $$;
    `);

    done();
  });

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
