import { EmailQueue } from "@monotonous/sdk-server";
import { FieldResolver } from "nexus";

export const createInvite: FieldResolver<"Mutation", "createInvite"> = async (
  _root,
  { email, teamId, projectId },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser) throw GqlError("Unauthorized");

  const invite = await prisma.invite.create({
    data: {
      email,
      teamId: teamId ?? undefined,
      projectId: projectId ?? undefined,
      invitedById: currentUser.id,
    },
  });

  await EmailQueue.queueInviteLink({
    to: email,
    inviteId: invite.id,
  });

  return invite;
};
