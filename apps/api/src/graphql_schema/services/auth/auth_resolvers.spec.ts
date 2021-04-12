import { createMercuriusTestClient } from "mercurius-integration-testing";
import { gql } from "urql";
import { createTestContext } from "../../../../tests/__helpers";

const query = gql`
  mutation RequestLogin($email: String!) {
    requestLogin(email: $email) {
      success
    }
  }
`;

describe("requestLogin mutation", () => {
  const ctx = createTestContext();

  test("successfully requests a login", async (done) => {
    let client = createMercuriusTestClient(ctx.server);

    await ctx.prisma.user.create({
      data: {
        email: "asd@asd.com",
        confirmed: true,
      },
    });

    const res = await client.mutate(query, {
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
    const res = await client.mutate(query, {
      variables: {
        email: "doesnt@exist.com",
      },
    });

    expect(res.errors).toBeDefined();
    done();
  });
});
