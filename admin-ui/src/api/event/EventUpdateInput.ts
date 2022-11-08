import { ArtistUpdateManyWithoutEventsInput } from "./ArtistUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  artists?: ArtistUpdateManyWithoutEventsInput;
  date?: Date | null;
  openers?: ArtistUpdateManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
