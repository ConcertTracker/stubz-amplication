import { EventUpdateManyWithoutArtistsInput } from "./EventUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  event?: EventUpdateManyWithoutArtistsInput;
  name?: string;
  spotifyId?: string | null;
};
