import { Args, Resolver, Query, Subscription, Context } from '@nestjs/graphql';
import { toAsyncIterator } from 'nestjs-mercurius';
import { PubSub } from 'mercurius';

import { CurrentUser } from 'src/auth/decorators/current_user.decorator';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';
import { NotificationsLoader } from '../loaders/notifications.loader';
import { User } from '../types/user.type';
import { Notification } from '../types/notification.type';

@Resolver(of => Notification)
export class NotificationsResolver extends NotificationsLoader {
  @Query(_returns => [Notification])
  async notifications(
    @CurrentUser() user: User,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: {
        userId: user.id,
      },
      ...paginationArgs(pagination),
    });
  }

  @Subscription(() => Notification)
  newNotification(
    @CurrentUser() _user: User,
    @Context('pubsub') pubSub: PubSub,
  ) {
    return toAsyncIterator(pubSub.subscribe('NEW_NOTIFICICATION'));
  }
}
