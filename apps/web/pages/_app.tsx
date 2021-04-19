import "../styles/index.css";
import { useEffect } from "react";
import { gql, createClient, defaultExchanges, Provider } from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";
import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import shallow from "zustand/shallow";

import { Header } from "components/header";
import { Footer } from "components/footer";
import { useMeQuery } from "graphql_client";
import { useAuth } from "hooks/use_auth";
import introspectedSchema from "schema_introspection.json";

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

const schema = (introspectedSchema as unknown) as IntrospectionData;

const client = createClient({
  url: "/graphql",
  exchanges: [
    devtoolsExchange,
    cacheExchange({
      schema,
    }),
    ...defaultExchanges,
  ],
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
