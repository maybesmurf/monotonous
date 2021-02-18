import { extendType, objectType } from 'nexus';

export const UserProfile = objectType({
  name: 'UserProfile',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
  },
});
