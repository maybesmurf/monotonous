import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import { cacheExchange } from "@urql/exchange-graphcache";
import introspectedSchema from "schema_introspection.json";

const schema = (introspectedSchema as unknown) as IntrospectionData;

export const graphcache = cacheExchange({
  schema,
  resolvers: {
    Query: {
      team: (_, args: { id: string }) => ({ __typename: "Team", ...args }),
    },
  },
});
