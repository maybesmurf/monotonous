import React, { FormEvent, useState } from "react";
import { gql } from "@urql/core";
import { useRouter } from "next/router";
import { useLoginMutation, useRequestLoginMutation } from "graphql_client";
import { useSearchParams } from "hooks/use_search_params";

gql`
  mutation RequestLogin($email: String!) {
    requestLogin(email: $email) {
      success
    }
  }
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

export default function Login() {
  const router = useRouter();
  const initialEmail = useSearchParams("email");
  const initialCode = useSearchParams("code");
  const [{ fetching: fetching1 }, requestLogin] = useRequestLoginMutation();
  const [{ fetching: fetching2 }, login] = useLoginMutation();
  const [email, setEmail] = useState(initialEmail || "");
  const [code, setCode] = useState(initialCode || "");
  const [showCode, setShowCode] = useState(false);

  async function handleLoginRequest(e: FormEvent) {
    e.preventDefault();

    try {
      await requestLogin({ email });
      setShowCode(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLogin(e: FormEvent) {
    try {
      e.preventDefault();
      await login({ code });
      router.replace("/");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="max-w-sm mx-auto text-sm">
      <form onSubmit={showCode ? handleLogin : handleLoginRequest}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </p>
        {showCode && (
          <p>
            <label htmlFor="code">Code</label>
            <input
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.currentTarget.value)}
            />
          </p>
        )}

        <button type="submit" disabled={fetching1 || fetching2}>
          Submit
        </button>
      </form>
    </main>
  );
}
