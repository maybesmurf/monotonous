import { NotificationTypes } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PubSubHost } from 'nestjs-mercurius';
import { SubTopics } from 'src/schema/schema.constants';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ICreateNotificationParams } from './notifications.interface';

@Injectable()
export class NotificationsService {
  errorCodes = {
    UNAUTHORIZED_CREATE: 'notification/UNAUTHORIZED_CREATE',
  };

  constructor(
    private readonly prisma: PrismaService,
    private readonly pubsub: PubSubHost,
  ) {}

  async createNotification(params: ICreateNotificationParams) {
    const user = await this.prisma.user.findFirst({
      where: { id: params.userId },
    });

    if (!user) {
      throw new Error(this.errorCodes.UNAUTHORIZED_CREATE);
    }

    const notification = await this.prisma.notification.create({
      data: {
        type: NotificationTypes.TEAM_INVITE,
        user: { connect: { id: user.id } },
        team: { connect: { id: params.teamId } },
        subject: { connect: { id: params.subjectId } },
      },
    });

    this.pubsub.getInstance()?.publish({
      topic: SubTopics.NEW_NOTIFICATION,
      payload: { newNotification: notification },
    });

    return notification;
  }
}
