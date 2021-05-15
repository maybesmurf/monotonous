import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation } from "graphql_client";
import { useAuth } from "hooks/use_auth";

export default function Login() {
  const router = useRouter();
  const setUser = useAuth((s) => s.setUser);
  const [login, { loading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent) {
    try {
      e.preventDefault();
      const { data } = await login({
        variables: { email, password },
      });

      if (data?.login) {
        const user = {
          id: data.login?.id,
          firstName: data.login?.profile?.firstName,
          lastName: data.login?.profile?.lastName,
        };

        setUser(user);
        router.replace("/");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <main className="max-w-sm mx-auto text-sm">
      <form onSubmit={handleLogin}>
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

        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="bg-gray-800 border border-gray-700 text-white"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </p>

        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </main>
  );
}
