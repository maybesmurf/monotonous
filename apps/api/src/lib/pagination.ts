import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  cursor: string;

  @Field(type => Int)
  take: number;

  @Field(type => Int)
  skip: number;
}

export function paginationArgs(pagination?: PaginationInput) {
  if (!pagination) {
    return {
      cursor: undefined,
      take: 10,
      skip: 0,
    };
  }

  return {
    cursor: pagination.cursor ? { id: pagination.cursor } : undefined,
    take: pagination.take ?? 10,
    skip: pagination.skip ?? 0,
  };
}
