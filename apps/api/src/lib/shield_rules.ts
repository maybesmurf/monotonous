import merc from 'mercurius';
import { ruleType } from 'nexus-shield';

export const isAuthenticated = ruleType({
  resolve(root, args, { userId }) {
    if (!userId) {
      throw new merc.ErrorWithProps('Unauthorized');
    }

    return true;
  },
});
