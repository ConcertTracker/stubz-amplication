import { EventUpdateManyWithoutArtistsInput } from "./EventUpdateManyWithoutArtistsInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type ArtistUpdateInput = {
  event?: EventUpdateManyWithoutArtistsInput;
  eventsOpened?: EventWhereUniqueInput | null;
  name?: string;
  spotifyId?: string | null;
};
