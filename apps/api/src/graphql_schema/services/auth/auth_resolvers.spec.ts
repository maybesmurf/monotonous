import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createTestContext } from "../../../../tests/__helpers";
import { createServer } from "../../../server";

const ctx = createTestContext();
const server = createServer(ctx.prisma);

it("does stuff", async () => {
  await ctx.prisma.user.create({
    data: {
      email: "asd@asd.com",
      confirmed: true,
    },
  });

  const client = createMercuriusTestClient(server);
  const query = `
    mutation {
      requestLogin(email: "asd@asd.com") {
        success 
      }
    }
  `;
  const res = await client.query(query);
  expect(res).toBe({
    data: {
      requestLogin: {
        success: true,
      },
    },
  });
});
