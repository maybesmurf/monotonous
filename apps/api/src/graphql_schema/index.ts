import { resolve } from "path";
import { makeSchema } from "nexus";
import { allow, nexusShield } from "nexus-shield";
import { config } from "@monotonous/conf";

import * as MiscResponses from "./misc_types";
import * as Models from "./models";
import * as Services from "./services";

export const schema = makeSchema({
  types: [MiscResponses, Models, Services],

  plugins: [
    nexusShield({
      defaultError: new Error("Not allowed"),
      defaultRule: allow,
    }),
  ],

  shouldGenerateArtifacts: config.mode === "development",
  contextType: {
    module: resolve("src/graphql_schema/custom_context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: resolve(process.cwd(), "typings/schema/index.d.ts"),
    schema: resolve(process.cwd(), "../../", "schema.graphql"),
  },
  sourceTypes: {
    modules: [{ module: "@prisma/client", alias: "prisma" }],
  },
  // prettierConfig: resolve(process.cwd(), '../../', '.prettierrc.json'),
  nonNullDefaults: {
    input: false,
    output: false,
  },
});

export const resolvers = {};
