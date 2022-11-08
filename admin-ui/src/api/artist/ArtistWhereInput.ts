import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ArtistWhereInput = {
  event?: EventListRelationFilter;
  eventsOpened?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
};
