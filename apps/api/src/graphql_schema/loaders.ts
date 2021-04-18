import { MercuriusLoaders } from "mercurius";
import { Context } from "./custom_context";
import { TeamLoader } from "./models/team/team_loader";
import { TeamMembershipLoader } from "./models/team_membership/team_membership_loader";
import { UserLoader } from "./models/user/user_loader";

export const loaders: MercuriusLoaders<Context> = {
  User: UserLoader,
  Team: TeamLoader,
  TeamMembership: TeamMembershipLoader,
};
