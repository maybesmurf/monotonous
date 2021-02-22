import { extendType, nonNull } from 'nexus';
import * as resolvers from './auth_resolvers';

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('preRegistration', {
      type: 'SuccessResponse',
      args: {
        email: nonNull('String'),
        firstName: nonNull('String'),
        lastName: nonNull('String'),
      },
      resolve: resolvers.preRegistration,
    });
  },
});
