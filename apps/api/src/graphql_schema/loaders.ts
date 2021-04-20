import { MercuriusLoaders } from "mercurius";
import { Context } from "./custom_context";
import { ProjectLoader } from "./models/project/project_loader";
import { TeamLoader } from "./models/team/team_loader";
import { TeamMembershipLoader } from "./models/team_membership/team_membership_loader";
import { UserLoader } from "./models/user/user_loader";

export const loaders: MercuriusLoaders<Context> = {
  Project: ProjectLoader,
  Team: TeamLoader,
  TeamMembership: TeamMembershipLoader,
  User: UserLoader,
};
