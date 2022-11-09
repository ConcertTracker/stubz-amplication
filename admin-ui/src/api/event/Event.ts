import { Artist } from "../artist/Artist";
import { UserEvent } from "../userEvent/UserEvent";
import { Venue } from "../venue/Venue";

export type Event = {
  artists?: Array<Artist>;
  createdAt: Date;
  date: Date | null;
  id: string;
  openers?: Array<Artist>;
  updatedAt: Date;
  userEvents?: Array<UserEvent>;
  venue?: Venue | null;
};
