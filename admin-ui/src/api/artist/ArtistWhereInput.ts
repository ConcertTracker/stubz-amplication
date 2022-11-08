import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArtistWhereInput = {
  event?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
