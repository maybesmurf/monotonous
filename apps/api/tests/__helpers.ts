import { prisma } from "@monotonous/sdk-server";
import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createServer } from "../src/server";

export function createTestContext() {
  const server = createServer({ prisma });
  const client = createMercuriusTestClient(server);

  afterEach(async (done) => {
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
    } catch (e) {
      console.log(e);
    }

    done();
  });

  return { prisma, server, client };
}
