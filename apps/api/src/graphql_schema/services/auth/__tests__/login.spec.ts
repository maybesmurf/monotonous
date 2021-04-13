import { createMercuriusTestClient } from "mercurius-integration-testing";
import { gql } from "urql";
import { createTestContext } from "../../../../../tests/__helpers";

const query = gql`
  mutation Login($code: String!) {
    login(code: $code) {
      id
      profile {
        firstName
        lastName
      }
    }
  }
`;

describe("login mutation", () => {
  const ctx = createTestContext();
  const client = createMercuriusTestClient(ctx.server);

  test("", async (done) => {
    done();
  });
});
