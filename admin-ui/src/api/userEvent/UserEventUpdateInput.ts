import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserEventUpdateInput = {
  event?: EventWhereUniqueInput;
  notes?: string | null;
  user?: UserWhereUniqueInput;
};
