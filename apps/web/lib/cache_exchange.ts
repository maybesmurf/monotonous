import { cacheExchange, Data, ResolverConfig } from "@urql/exchange-graphcache";
import { TeamShowDocument } from "graphql_client";
import { schema } from "./schema";

function resolveId(__typename: string) {
  return (_: Data, args: { id: string }) => ({ __typename, id: args.id });
}

const resolvers: ResolverConfig = {
  Query: {
    team: resolveId("Team"),
  },
};

export const graphcache = cacheExchange({
  schema,
  resolvers,
});
