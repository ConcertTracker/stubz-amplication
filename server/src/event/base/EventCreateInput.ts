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
import { ArtistCreateNestedManyWithoutEventsInput } from "./ArtistCreateNestedManyWithoutEventsInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserEventCreateNestedManyWithoutEventsInput } from "./UserEventCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../../venue/base/VenueWhereUniqueInput";
@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: () => ArtistCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => ArtistCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => ArtistCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  artists?: ArtistCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ArtistCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => ArtistCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => ArtistCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  openers?: ArtistCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: () => UserEventCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => UserEventCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => UserEventCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  userEvents?: UserEventCreateNestedManyWithoutEventsInput;

  @ApiProperty({
    required: false,
    type: () => VenueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VenueWhereUniqueInput)
  @IsOptional()
  @Field(() => VenueWhereUniqueInput, {
    nullable: true,
  })
  venue?: VenueWhereUniqueInput | null;
}
export { EventCreateInput };
