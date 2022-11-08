import { SortOrder } from "../../util/SortOrder";

export type VenueOrderByInput = {
  createdAt?: SortOrder;
  googlePlacesId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
