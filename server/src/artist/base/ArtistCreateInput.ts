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
import { EventCreateNestedManyWithoutArtistsInput } from "./EventCreateNestedManyWithoutArtistsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class ArtistCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutArtistsInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutArtistsInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutArtistsInput, {
    nullable: true,
  })
  event?: EventCreateNestedManyWithoutArtistsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  spotifyId?: string | null;
}
export { ArtistCreateInput };
