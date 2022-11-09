import { UserEventWhereInput } from "./UserEventWhereInput";
import { UserEventOrderByInput } from "./UserEventOrderByInput";

export type UserEventFindManyArgs = {
  where?: UserEventWhereInput;
  orderBy?: Array<UserEventOrderByInput>;
  skip?: number;
  take?: number;
};
