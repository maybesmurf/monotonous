import "../styles/index.css";
import { useEffect } from "react";
import shallow from "zustand/shallow";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { useAuth } from "hooks/use_auth";
import { MeQuery } from "graphql_client";

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

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const [setUser] = useAuth((s) => [s.setUser], shallow);

  useEffect(() => {
    async function init() {
      try {
        const { data } = await client.query<MeQuery>({ query });

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
    <ApolloProvider client={client}>
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
