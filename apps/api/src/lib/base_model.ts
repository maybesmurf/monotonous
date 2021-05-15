import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseModel {
  @Field(type => ID)
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
