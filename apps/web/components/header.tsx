import React from "react";
import Link from "next/link";
import { useAuth } from "hooks/use_auth";
import { useLogoutMutation } from "graphql_client";

export const Header = () => {
  const [_, logout] = useLogoutMutation();
  const [loggedIn, resetUser] = useAuth((s) => [s.loggedIn, s.resetUser]);

  async function handleLogout() {
    try {
      await logout();
      resetUser();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <header className="flex items-center container py-10">
      <p>
        <Link href="/">
          <a>Monotonous</a>
        </Link>
      </p>

      <nav className="ml-auto space-x-3">
        {loggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
