import { ArtistCreateNestedManyWithoutEventsInput } from "./ArtistCreateNestedManyWithoutEventsInput";
import { UserEventCreateNestedManyWithoutEventsInput } from "./UserEventCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  artists?: ArtistCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  openers?: ArtistCreateNestedManyWithoutEventsInput;
  userEvents?: UserEventCreateNestedManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
