import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArtistWhereInput = {
  event?: EventListRelationFilter;
  eventsOpened?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
