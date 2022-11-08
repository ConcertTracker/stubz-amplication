import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type VenueWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  location?: StringFilter;
  name?: StringFilter;
};
