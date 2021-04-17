import { ruleType, ShieldCache } from "nexus-shield";

const auth = ruleType<any, string>({
  name: "AuthGuard",
  cache: ShieldCache.CONTEXTUAL,
  resolve: (_root, _args, { currentUser, GqlError }) => {
    const allowed = Boolean(currentUser);
    if (!allowed) throw GqlError("Unauthorized");
    return allowed;
  },
});

export const shields = {
  auth,
};
