import { ArtistListRelationFilter } from "../artist/ArtistListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventWhereInput = {
  artists?: ArtistListRelationFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  venue?: VenueWhereUniqueInput;
};