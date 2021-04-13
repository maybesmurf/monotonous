import { config } from "@monotonous/conf";
import { AuthService, prisma } from "@monotonous/sdk-server";
import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createServer } from "../src/server";

export function createTestContext() {
  const server = createServer({ prisma });
  const client = createMercuriusTestClient(server);

  async function authenticate(userId: string): Promise<void> {
    const jwt = await AuthService.signJwt(userId);
    client.setCookies({ [config.auth.cookiePrefix]: jwt });
  }

  afterEach(async (done) => {
    // If we set a cookie during an authenticated test clean it up.
    if (client.cookies[config.auth.cookiePrefix]) {
      client.setCookies({ [config.auth.cookiePrefix]: "" });
    }

    // Cleanup database tables.
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

  return { prisma, server, client, authenticate };
}
