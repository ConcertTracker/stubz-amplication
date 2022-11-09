import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserEventWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
