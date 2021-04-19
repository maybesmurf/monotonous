import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import { cacheExchange, Data } from "@urql/exchange-graphcache";
import introspectedSchema from "schema_introspection.json";

const schema = (introspectedSchema as unknown) as IntrospectionData;

function resolveId(__typename: string) {
  return (_: Data, args: { id: string }) => ({ __typename, id: args.id });
}

export const graphcache = cacheExchange({
  schema,
  resolvers: {
    Query: {
      team: resolveId("Team"),
      project: resolveId("Project"),
    },
  },
});
