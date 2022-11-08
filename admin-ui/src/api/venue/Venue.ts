import { Event } from "../event/Event";

export type Venue = {
  createdAt: Date;
  events?: Array<Event>;
  googlePlacesId: string | null;
  id: string;
  location: string;
  name: string;
  updatedAt: Date;
};
