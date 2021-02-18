import { resolve } from 'path';
import { makeSchema } from 'nexus';
import { allow, nexusShield } from 'nexus-shield';
import { paljs } from '@paljs/nexus';

import * as Models from './models';

export const schema = makeSchema({
  types: [Models],

  plugins: [
    paljs(),
    nexusShield({
      defaultError: new Error('Not allowed'),
      defaultRule: allow,
    }),
  ],

  contextType: {
    module: '@monotonous/types',
    export: 'Context',
  },
  outputs: {
    typegen: resolve(
      process.cwd(),
      '../../',
      'node_modules/@monotonous/nexus/index.d.ts'
    ),
    schema: resolve(process.cwd(), '../../', 'schema.graphql'),
  },
  sourceTypes: {
    modules: [{ module: '@prisma/client', alias: 'prisma' }],
  },
  // prettierConfig: resolve(process.cwd(), '../../', '.prettierrc.json'),
  nonNullDefaults: {
    input: false,
    output: false,
  },
});

export const resolvers = {};
