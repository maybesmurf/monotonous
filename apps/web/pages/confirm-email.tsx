import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { gql } from "@urql/core";
import { useConfirmEmailMutation } from "graphql_client";
import { useSearchParams } from "hooks/use_search_params";

gql`
  mutation ConfirmEmail($token: String!, $email: String!) {
    confirmEmail(token: $token, email: $email) {
      id
    }
  }
`;

export default function ConfirmEmail() {
  const router = useRouter();
  const initialToken = useSearchParams("token");
  const initialEmail = useSearchParams("email") || "";
  const [{ fetching }, confirmEmail] = useConfirmEmailMutation();
  const [token, setToken] = useState(initialToken || "");
  const [email, setEmail] = useState(initialEmail || "");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await confirmEmail({ email, token });
      router.replace("/");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Confirm Your Email</p>

      <p>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="bg-gray-800 text-white border border-gray-700"
        />
      </p>

      <p>
        <label>Confirmation Token</label>
        <input
          type="text"
          value={token}
          className="bg-gray-800 text-white border border-gray-700"
          onChange={(e) => setToken(e.currentTarget.value)}
        />
      </p>

      <button disabled={fetching}>Submit</button>
    </form>
  );
}
