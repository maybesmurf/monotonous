import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from 'nestjs-mercurius';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().request.user;
  },
);
