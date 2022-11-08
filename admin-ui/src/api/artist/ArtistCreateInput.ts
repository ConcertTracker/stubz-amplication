import { EventCreateNestedManyWithoutArtistsInput } from "./EventCreateNestedManyWithoutArtistsInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ArtistCreateInput = {
  event?: EventCreateNestedManyWithoutArtistsInput;
  eventsOpened?: EventWhereUniqueInput | null;
  name: string;
  spotifyId?: string | null;
};
