import { Event } from "../event/Event";
import { User } from "../user/User";

export type UserEvent = {
  createdAt: Date;
  event?: Event;
  id: string;
  notes: string | null;
  updatedAt: Date;
  user?: User;
};
