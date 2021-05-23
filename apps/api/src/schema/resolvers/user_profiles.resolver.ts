import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserProfile } from '../types/user_profile.type';

@Resolver(of => UserProfile)
export class UserProfilesResolver {
  @ResolveField(type => String)
  fullName(@Parent() user: UserProfile) {
    return `${user.firstName} ${user.lastName}`;
  }
}
