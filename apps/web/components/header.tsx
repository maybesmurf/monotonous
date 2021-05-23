import React from 'react';
import Link from 'next/link';
import { useAuth } from 'hooks/use_auth';
import { useLogoutMutation } from 'graphql_client';
import { Notifications } from './notifications';

export const Header = () => {
  const [logout] = useLogoutMutation();
  const [loggedIn, resetUser] = useAuth(s => [s.loggedIn, s.resetUser]);

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

      <nav className="flex items-center ml-auto space-x-3">
        {loggedIn ? (
          <>
            <Notifications />
            <Link href="/teams">Teams</Link>
            <Link href="/invites">Invites</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};
