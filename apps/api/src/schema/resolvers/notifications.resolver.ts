import { Args, Resolver, Query, Subscription, Context } from '@nestjs/graphql';
import { toAsyncIterator } from 'nestjs-mercurius';
import { PubSub } from 'mercurius';

import { CurrentUser } from 'src/auth/decorators/current_user.decorator';
import { paginationArgs, PaginationInput } from 'src/lib/pagination';
import { NotificationsLoader } from '../loaders/notifications.loader';
import { User } from '../types/user.type';
import { Notification } from '../types/notification.type';
import { SubTopics } from '../schema.constants';
import { Public } from 'src/auth/decorators/public.decorator';

@Resolver(of => Notification)
export class NotificationsResolver extends NotificationsLoader {
  @Query(returns => [Notification])
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

  @Subscription(() => Notification, {
    resolve: payload => payload,
  })
  onNewNotification(@Context('pubsub') pubsub: PubSub) {
    return toAsyncIterator(pubsub.subscribe(SubTopics.NEW_NOTIFICATION));
  }
}
