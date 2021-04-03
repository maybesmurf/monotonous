import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createTestContext } from "../../../../tests/__helpers";

import { RequestLoginDocument } from "@monotonous/sdk-client";

describe("requestLogin mutation", () => {
  const ctx = createTestContext();

  beforeEach(async (done) => {
    await ctx.prisma.user.create({
      data: {
        email: "asd@asd.com",
        confirmed: true,
      },
    });

    done();
  });

  test("successfully requests a login", async (done) => {
    let client = createMercuriusTestClient(ctx.server);
    const res = await client.mutate(RequestLoginDocument, {
      variables: {
        email: "asd@asd.com",
      },
    });

    expect(res.errors).toBeUndefined();
    expect(res.data.requestLogin).toMatchObject({
      success: true,
    });

    done();
  });

  test("returns an error when user doesnt exist", async (done) => {
    let client = createMercuriusTestClient(ctx.server);
    const res = await client.mutate(RequestLoginDocument, {
      variables: {
        email: "doesnt@exist.com",
      },
    });

    expect(res.errors).toBeDefined();
    done();
  });
});
