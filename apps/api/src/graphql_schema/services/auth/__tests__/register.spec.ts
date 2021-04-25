import { gql } from "@apollo/client";
import { createTestContext } from "../../../../../tests/__helpers";

const query = gql`
  mutation Signup($email: String!, $firstName: String!, $lastName: String!) {
    register(email: $email, firstName: $firstName, lastName: $lastName) {
      id
      email
      confirmed
      profile {
        firstName
        lastName
        fullName
      }
    }
  }
`;

describe("register mutation", () => {
  const ctx = createTestContext();

  test("should register a user with proper params", async (done) => {
    const variables = {
      email: "asd@asd.com",
      firstName: "Nick",
      lastName: "Q",
    };

    const result = await ctx.client.mutate(query, {
      variables,
    });

    expect(result.data.register.id).toBeDefined();
    expect(result.data.register).toMatchObject({
      email: variables.email,
      profile: {
        firstName: variables.firstName,
        lastName: variables.lastName,
      },
    });

    done();
  });

  test("returns errors if improper attributs are given", async (done) => {
    const result = await ctx.client.mutate(query, {
      variables: {
        email: "none",
      },
    });

    expect(result.errors).toBeDefined();
    done();
  });
});
