import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  events?: EventCreateNestedManyWithoutVenuesInput;
  googlePlacesId?: string | null;
  location: string;
  name: string;
};
