import React, { FormEvent, useState } from "react";
import {
  useRequestLoginMutation,
  useLoginMutation,
} from "@monotonous/sdk-client";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const initialEmail =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("email");
  const initialCode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("code");
  const [{ fetching: fetching1 }, requestLogin] = useRequestLoginMutation();
  const [{ fetching: fetching2 }, login] = useLoginMutation();
  const [email, setEmail] = useState(initialEmail || "");
  const [code, setCode] = useState(initialCode || "");
  const [showCode, setShowCode] = useState(false);

  async function handleLoginRequest(e: FormEvent) {
    try {
      e.preventDefault();
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
