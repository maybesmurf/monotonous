import { cacheExchange, Data, ResolverConfig } from "@urql/exchange-graphcache";
import { schema } from "./schema";

function resolveId(__typename: string) {
  return (_: Data, args: { id: string }) => ({ __typename, id: args.id });
}

const resolvers: ResolverConfig = {
  Query: {
    team: resolveId("Team"),
    project: resolveId("Project"),
  },
};

export const graphcache = cacheExchange({
  schema,
  resolvers,
});
