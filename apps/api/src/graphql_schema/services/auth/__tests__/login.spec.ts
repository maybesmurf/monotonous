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

  test("", async (done) => {
    done();
  });
});
