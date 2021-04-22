import { TeamRoles } from ".prisma/client";
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

export const deleteInvite: FieldResolver<"Mutation", "deleteInvite"> = async (
  _root,
  { id },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser) throw GqlError("Unauthorized");

  const invite = prisma.invite.findFirst({
    where: {
      id,
      team: {
        memberships: {
          some: {
            userId: currentUser.id,
            role: TeamRoles.ADMIN,
          },
        },
      },
    },
  });

  if (!invite) {
    throw GqlError("Not Found");
  }

  await prisma.invite.delete({
    where: { id },
  });

  return { success: true };
};

export const listInvites: FieldResolver<"Query", "listInvites"> = async (
  _root,
  { teamId, projectId, email },
  { currentUser, prisma, GqlError }
) => {
  if (!currentUser || (email && email !== currentUser.email)) {
    throw GqlError("Forbidden");
  }

  return prisma.invite.findMany({
    where: {
      teamId: teamId ?? undefined,
      projectId: projectId ?? undefined,
      email: email ?? undefined,
      team: {
        memberships: {
          some: {
            userId: { equals: currentUser.id },
            role: { equals: TeamRoles.ADMIN },
          },
        },
      },
    },
  });
};
