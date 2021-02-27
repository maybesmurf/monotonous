import { extendType, nonNull } from 'nexus';
import * as resolvers from './auth_resolvers';

export const AuthMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('requestEmailConfirmation', {
      type: 'User',
      args: {
        email: nonNull('String'),
        firstName: nonNull('String'),
        lastName: nonNull('String'),
      },
      resolve: resolvers.requestEmailConfirmation,
    });

    t.field('confirmEmail', {
      type: 'User',
      args: {
        token: nonNull('String'),
        email: nonNull('String'),
        firstName: nonNull('String'),
        lastName: nonNull('String'),
      },
      resolve: resolvers.confirmEmail,
    });

    t.field('requestLogin', {
      type: 'SuccessResponse',
      args: {
        email: nonNull('String'),
      },
      resolve: resolvers.requestLogin,
    });

    t.field('login', {
      type: 'User',
      args: {
        token: nonNull('String'),
      },
      resolve: resolvers.login,
    });
  },
});
