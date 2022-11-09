import { ArtistUpdateManyWithoutEventsInput } from "./ArtistUpdateManyWithoutEventsInput";
import { UserEventUpdateManyWithoutEventsInput } from "./UserEventUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  artists?: ArtistUpdateManyWithoutEventsInput;
  date?: Date | null;
  openers?: ArtistUpdateManyWithoutEventsInput;
  userEvents?: UserEventUpdateManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
