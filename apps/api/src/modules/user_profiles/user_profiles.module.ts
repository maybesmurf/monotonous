import { Module } from '@nestjs/common';
import { UserProfilesResolver } from './user_profiles.resolver';

@Module({
  providers: [UserProfilesResolver],
})
export class UserProfilesModule {}
