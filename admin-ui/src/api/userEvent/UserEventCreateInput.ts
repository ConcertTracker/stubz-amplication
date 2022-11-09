import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserEventCreateInput = {
  event: EventWhereUniqueInput;
  notes?: string | null;
  user: UserWhereUniqueInput;
};
