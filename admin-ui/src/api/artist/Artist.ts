import { Event } from "../event/Event";

export type Artist = {
  createdAt: Date;
  event?: Array<Event>;
  eventsOpened?: Array<Event>;
  id: string;
  name: string;
  spotifyId: string | null;
  updatedAt: Date;
};
