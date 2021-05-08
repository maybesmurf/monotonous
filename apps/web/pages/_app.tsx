import "../styles/index.css";
import { useEffect } from "react";
import shallow from "zustand/shallow";
import { ApolloProvider, gql } from "@apollo/client";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { useAuth } from "hooks/use_auth";
import { MeQuery } from "graphql_client";
import { gqlClient } from "lib/gql_client";

const query = gql`
  query Me {
    me {
      id
      profile {
        firstName
        lastName
      }
    }
  }
`;

export default function App({ Component, pageProps }) {
  const [setUser] = useAuth((s) => [s.setUser], shallow);

  useEffect(() => {
    async function init() {
      try {
        const { data } = await gqlClient.query<MeQuery>({ query });

        if (data?.me && data.me.profile) {
          setUser({
            id: data.me.id,
            firstName: data.me.profile.firstName,
            lastName: data.me.profile.lastName,
          });
        }
      } catch (e) {
        // Meh
      }
    }

    init();
  }, []);

  return (
    <ApolloProvider client={gqlClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Component {...pageProps} />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}
