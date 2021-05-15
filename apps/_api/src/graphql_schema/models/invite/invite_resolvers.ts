import { PrismaPromise, MemberRoles } from "@prisma/client";
import { EmailQueue } from "@monotonous/sdk-server";
import { logger } from "env-var";
import { GraphQLError } from "graphql";
import { FieldResolver } from "nexus";
import { ForbiddenError, NotFoundError, UnauthorizedError } from "../../errors";

export const createInvite: FieldResolver<"Mutation", "createInvite"> = async (
  _root,
  { email, teamId },
  { currentUser, prisma }
) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  const invite = await prisma.invite.create({
    data: {
      email,
      teamId: teamId ?? undefined,
      invitedById: currentUser.id,
    },
  });

  await EmailQueue.queueInviteLink({
    to: email,
    inviteId: invite.id,
  });

  return invite;
};

export const acceptInvite: FieldResolver<"Mutation", "acceptInvite"> = async (
  _root,
  { id },
  { currentUser, logger, prisma, GqlError }
) => {
  if (!currentUser) {
    throw UnauthorizedError();
  }

  const invite = await prisma.invite.findUnique({
    where: { id },
  });

  if (!invite) {
    throw NotFoundError();
  }

  if (invite.email !== currentUser.email) {
    throw ForbiddenError();
  }

  const transactions: PrismaPromise<any>[] = [
    prisma.invite.delete({
      where: { id },
    }),
  ];

  if (invite.teamId) {
    transactions.push(
      prisma.teamMembership.create({
        data: {
          userId: currentUser.id,
          teamId: invite.teamId,
        },
      })
    );
  }

  try {
    await prisma.$transaction(transactions);
    return { success: true };
  } catch (e) {
    logger.error(e);
    return { success: false };
  }
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
            role: MemberRoles.ADMIN,
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
      email: email ?? currentUser.email,
    },
  });
};
