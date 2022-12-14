/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserEventWhereInput } from "./UserEventWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserEventListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserEventWhereInput,
  })
  @ValidateNested()
  @Type(() => UserEventWhereInput)
  @IsOptional()
  @Field(() => UserEventWhereInput, {
    nullable: true,
  })
  every?: UserEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserEventWhereInput,
  })
  @ValidateNested()
  @Type(() => UserEventWhereInput)
  @IsOptional()
  @Field(() => UserEventWhereInput, {
    nullable: true,
  })
  some?: UserEventWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserEventWhereInput,
  })
  @ValidateNested()
  @Type(() => UserEventWhereInput)
  @IsOptional()
  @Field(() => UserEventWhereInput, {
    nullable: true,
  })
  none?: UserEventWhereInput;
}
export { UserEventListRelationFilter };
