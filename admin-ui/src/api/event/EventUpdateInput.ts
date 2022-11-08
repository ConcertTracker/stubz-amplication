import { ArtistUpdateManyWithoutEventsInput } from "./ArtistUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  artists?: ArtistUpdateManyWithoutEventsInput;
  date?: Date | null;
  eventsOpened?: ArtistUpdateManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
