import "../styles/index.css";
import "../styles/tailwind.css";
import { gql } from "urql";
import shallow from "zustand/shallow";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { useLogoutMutation, useMeQuery } from "graphql_client";
import { useEffect } from "react";
import { useAuth } from "hooks/use_auth";

gql`
  query Me {
    me {
      id
      profile {
        firstName
        lastName
      }
    }
  }
  mutation Logout {
    logout {
      success
    }
  }
`;

export default function App({ Component, pageProps }) {
  const [setUser] = useAuth((s) => [s.setUser], shallow);
  const [{ fetching, data }] = useMeQuery();

  useEffect(() => {
    if (data?.me && data.me.profile) {
      setUser({
        id: data.me.id,
        firstName: data.me.profile.firstName,
        lastName: data.me.profile.lastName,
      });
    }
  }, [data]);

  if (fetching && !data) {
    return <p>loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Component {...pageProps} />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
