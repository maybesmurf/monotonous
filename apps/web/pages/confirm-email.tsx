import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useConfirmEmailMutation } from "graphql_client";
import { useSearchParams } from "hooks/use_search_params";
import { useAuth } from "hooks/use_auth";

export default function ConfirmEmail() {
  const router = useRouter();
  const setUser = useAuth((s) => s.setUser);
  const initialToken = useSearchParams("token");
  const initialEmail = useSearchParams("email") || "";
  const [confirmEmail, { loading }] = useConfirmEmailMutation();
  const [token, setToken] = useState(initialToken || "");
  const [email, setEmail] = useState(initialEmail || "");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const result = await confirmEmail({
        variables: { email, token },
      });

      if (result.data) {
        const user = {
          id: result.data.confirmEmail?.id,
          firstName: result.data.confirmEmail?.profile?.firstName,
          lastName: result.data.confirmEmail?.profile?.lastName,
        };

        setUser(user);
      }

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

      <button disabled={loading}>Submit</button>
    </form>
  );
}
