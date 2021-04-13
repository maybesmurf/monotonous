import { gql } from "@urql/core";
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

  test("requests a otp", async (done) => {
    const email = "asd@asd.com";
    await ctx.prisma.user.create({
      data: { email },
    });

    const result = await ctx.client.mutate(query, {
      variables: { email },
    });

    expect(result.data.requestLogin.success).toBeTruthy();
    done();
  });
});
