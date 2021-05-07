import { MercuriusLoaders } from "mercurius";
import { Context } from "./custom_context";
import { InviteLoader } from "./models/invite/invite_loader";
import { ProjectLoader } from "./models/project/project_loader";
import { ProjectMembershipLoader } from "./models/project_membership/project_membership_loader";
import { TeamLoader } from "./models/team/team_loader";
import { TeamMembershipLoader } from "./models/team_membership/team_membership_loader";
import { UserLoader } from "./models/user/user_loader";

export const loaders: MercuriusLoaders<Context> = {
  Invite: InviteLoader,
  Project: ProjectLoader,
  ProjectMembership: ProjectMembershipLoader,
  Team: TeamLoader,
  TeamMembership: TeamMembershipLoader,
  User: UserLoader,
};
