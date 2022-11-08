import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  createdAt?: SortOrder;
  eventsOpenedId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  spotifyId?: SortOrder;
  updatedAt?: SortOrder;
};
