import { EventUpdateManyWithoutVenuesInput } from "./EventUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  events?: EventUpdateManyWithoutVenuesInput;
  googlePlacesId?: string | null;
  location?: string;
  name?: string;
};
