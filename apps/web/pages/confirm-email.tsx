import { useConfirmEmailMutation } from "@monotonous/sdk-client";
import React, { useEffect, useState } from "react";
//import useRouter from "next/router";

export default function ConfirmEmail() {
  const initialToken =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("token");
  const [{ data, fetching }, confirmEmail] = useConfirmEmailMutation();
  const [token, setToken] = useState(initialToken || "");

  return (
    <form>
      <p>Confirm Your Email</p>

      <p>
        <label>Confirmation Token</label>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.currentTarget.value)}
        />
      </p>

      <button disabled={fetching}>Submit</button>
    </form>
  );
}
