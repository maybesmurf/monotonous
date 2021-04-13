import { gql } from "@urql/core";
import { createMercuriusTestClient } from "mercurius-integration-testing";
import { createTestContext } from "../../../../../tests/__helpers";

const query = gql`
  mutation RequestLogin($email: String!) {
    requestLogin(email: $email) {
      success
    }
  }
`;

describe("confirmLogin mutation", () => {
  const ctx = createTestContext();
  const client = createMercuriusTestClient(ctx.server);

  test("requests a otp", async (done) => {
    const email = "asd@asd.com";
    await ctx.prisma.user.create({
      data: { email },
    });

    const result = await client.mutate(query, {
      variables: { email },
    });

    expect(result.data.requestLogin.success).toBeTruthy();
    done();
  });
});
