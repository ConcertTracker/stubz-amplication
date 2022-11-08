import { ArtistCreateNestedManyWithoutEventsInput } from "./ArtistCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  artists?: ArtistCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  eventsOpened?: ArtistCreateNestedManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
