import {
  ForbiddenException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { Args, InputType, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaPromise } from '@prisma/client';
import { CurrentUser } from '../../auth/decorators/current_user.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';
import { User } from '../types/user.type';
import { CreateInviteInput } from '../input_types/create_invite.input';
import { Invite } from '../types/invite.type';
import { InvitesLoader } from '../loaders/invites.loader';

@Resolver(of => Invite)
export class InvitesResolver extends InvitesLoader {
  @Query(returns => [Invite])
  @UseGuards(JwtAuthGuard)
  async invites(
    @CurrentUser() user: User,
    @Args('teamId', { nullable: true }) teamId?: string,
  ) {
    return this.prisma.invite.findMany({
      where: {
        email: user.email,
        teamId: teamId ?? undefined,
      },
    });
  }

  @Mutation(returns => Invite)
  @UseGuards(JwtAuthGuard)
  async createInvite(
    @CurrentUser() user: User,
    @Args('input') input: CreateInviteInput,
  ): Promise<Invite> {
    const invite = await this.prisma.invite.create({
      data: {
        email: input.email,
        teamId: input.teamId ?? undefined,
        invitedById: user.id,
      },
    });

    const invitedUser = await this.prisma.user.findFirst({
      where: { email: input.email },
    });

    if (invitedUser) {
      await this.notificationsService.createNotification({
        userId: user.id,
        subjectId: invitedUser.id,
        teamId: input.teamId,
      });
    }

    // await EmailQueue.queueInviteLink({
    //   to: email,
    //   inviteId: invite.id,
    // });

    return invite;
  }

  @Mutation(returns => Invite)
  @UseGuards(JwtAuthGuard)
  async acceptInvite(
    @CurrentUser() user: User,
    @Args('id') id: string,
  ): Promise<{ success: boolean }> {
    const invite = await this.prisma.invite.findUnique({
      where: { id },
    });

    if (!invite) {
      throw new NotFoundException('Invite doesnt exist');
    }

    if (invite.email !== user.email) {
      throw new ForbiddenException();
    }

    const transactions: PrismaPromise<unknown>[] = [
      this.prisma.invite.delete({
        where: { id },
      }),
    ];

    if (invite.teamId) {
      transactions.push(
        this.prisma.teamMembership.create({
          data: {
            userId: user.id,
            teamId: invite.teamId,
          },
        }),
      );
    }

    try {
      await this.prisma.$transaction(transactions);
      return { success: true };
    } catch (e) {
      this.logger.error(e);
      return { success: false };
    }
  }

  @Mutation(type => Invite)
  @UseGuards(JwtAuthGuard)
  async deleteInvite(@CurrentUser() user: User, @Args('id') id: string) {
    const invite = await this.prisma.invite.findFirst({
      where: { id },
    });

    if (!invite) {
      throw new NotFoundException();
    }

    if (invite.email !== user.email) {
      throw new ForbiddenException();
    }

    await this.prisma.invite.delete({
      where: { id },
    });

    return invite;
  }
}
