import { Parent, Resolver } from '@nestjs/graphql';
import { ResolveLoader, LoaderQuery } from 'nestjs-mercurius';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { User } from '../types/user.type';
import { UserProfile } from '../types/user_profile.type';

@Resolver(of => User)
export class UsersLoader {
  constructor(readonly prisma: PrismaService) {}

  @ResolveLoader(returns => UserProfile)
  async profile(@Parent() queries: LoaderQuery<User>[]) {
    const profiles = await this.prisma.userProfile.findMany({
      where: {
        userId: { in: queries.map(q => q.obj.id) },
      },
    });

    const lookup = profiles.reduce((acc, p) => {
      acc[p.userId] = p;
      return acc;
    }, {});

    return queries.map(q => lookup[q.obj.id]);
  }
}
