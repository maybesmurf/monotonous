import "../styles/index.css";
import { useEffect } from "react";
import {
  gql,
  createClient,
  defaultExchanges,
  Provider,
  dedupExchange,
  fetchExchange,
} from "urql";
import { devtoolsExchange } from "@urql/devtools";
import shallow from "zustand/shallow";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { useMeQuery } from "graphql_client";
import { useAuth } from "hooks/use_auth";
import { graphcache } from "lib/graphcache";

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
`;

const client = createClient({
  url: "/graphql",
  requestPolicy: "cache-and-network",
  exchanges: [devtoolsExchange, dedupExchange, graphcache, fetchExchange],
  fetchOptions: {
    credentials: "include",
  },
});

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
    <Provider value={client}>
      <div className="min-h-screen flex flex-col">
        <Header />

        <Component {...pageProps} />

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
