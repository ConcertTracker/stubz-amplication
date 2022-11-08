import { EventCreateNestedManyWithoutArtistsInput } from "./EventCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  event?: EventCreateNestedManyWithoutArtistsInput;
  name: string;
  spotifyId?: string | null;
};
