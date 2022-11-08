import { ArtistCreateNestedManyWithoutEventsInput } from "./ArtistCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  artists?: ArtistCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  openers?: ArtistCreateNestedManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
