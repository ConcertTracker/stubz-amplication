import { Artist } from "../artist/Artist";
import { Venue } from "../venue/Venue";

export type Event = {
  artists?: Array<Artist>;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  venue?: Venue | null;
};