import { EventCreateNestedManyWithoutArtistsInput } from "./EventCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  event?: EventCreateNestedManyWithoutArtistsInput;
  eventsOpened?: EventCreateNestedManyWithoutArtistsInput;
  name: string;
  spotifyId?: string | null;
};
