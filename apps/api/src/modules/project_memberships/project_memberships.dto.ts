import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddMemberToProjectInput {
  @Field()
  projectId: string;

  @Field()
  teamMembershipId: string;
}
