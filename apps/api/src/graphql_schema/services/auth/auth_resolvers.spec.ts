import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createTestContext } from "../../../../tests/__helpers";

const ctx = createTestContext();

it("does stuff", async () => {
  await ctx.prisma.user.create({
    data: {
      email: "asd@asd.com",
      confirmed: true,
    },
  });

  const client = createMercuriusTestClient(ctx.server);
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
