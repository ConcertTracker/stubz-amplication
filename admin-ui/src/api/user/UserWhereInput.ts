import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserEventListRelationFilter } from "../userEvent/UserEventListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userEvents?: UserEventListRelationFilter;
  username?: StringFilter;
};
