import { EventUpdateManyWithoutArtistsInput } from "./EventUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  event?: EventUpdateManyWithoutArtistsInput;
  eventsOpened?: EventUpdateManyWithoutArtistsInput;
  name?: string;
  spotifyId?: string | null;
};
