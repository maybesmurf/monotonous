import {
  ForbiddenException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import {
  Args,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { PrismaPromise } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CurrentUser } from '../auth/current_user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { User } from '../users/users.model';
import { CreateInviteInput } from './invites.dto';
import { Invite } from './invites.model';

@Resolver(of => Invite)
export class InvitesResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: PinoLogger,
  ) {}

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
}
