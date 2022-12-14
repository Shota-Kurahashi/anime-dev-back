import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
