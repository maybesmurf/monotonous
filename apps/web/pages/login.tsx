import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation, useRequestLoginMutation } from "graphql_client";
import { useSearchParams } from "hooks/use_search_params";
import { useAuth } from "hooks/use_auth";

export default function Login() {
  const router = useRouter();
  const setUser = useAuth((s) => s.setUser);
  const initialEmail = useSearchParams("email");
  const initialCode = useSearchParams("code");
  const [{ fetching: fetching1 }, requestLogin] = useRequestLoginMutation();
  const [{ fetching: fetching2 }, login] = useLoginMutation();
  const [email, setEmail] = useState(initialEmail || "");
  const [code, setCode] = useState(initialCode || "");
  const [showCode, setShowCode] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  async function handleLoginRequest(e: FormEvent) {
    e.preventDefault();

    try {
      const { error } = await requestLogin({ email });

      if (!error) {
        setAttemptsLeft(3);
        setShowCode(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function handleLogin(e: FormEvent) {
    try {
      e.preventDefault();
      const { data, error } = await login({ email, code });

      if (data?.login) {
        const user = {
          id: data.login?.id,
          firstName: data.login?.profile?.firstName,
          lastName: data.login?.profile?.lastName,
        };

        setUser(user);
        router.replace("/");
      }

      if (error) {
        error.graphQLErrors.forEach((err) => {
          const attemptsLeft = err.extensions?.attemptsLeft;

          if (attemptsLeft) {
            setAttemptsLeft(attemptsLeft);
          } else {
            setEmail("");
            setCode("");
            setShowCode(false);
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="max-w-sm mx-auto text-sm">
      <p>You have {attemptsLeft} attempts left.</p>

      <form onSubmit={showCode ? handleLogin : handleLoginRequest}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            className="bg-gray-800 border border-gray-700 text-white"
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
              className="bg-gray-800 border border-gray-700 text-white"
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
