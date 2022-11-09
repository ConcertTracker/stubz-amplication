import { InputJsonValue } from "../../types";
import { UserEventUpdateManyWithoutUsersInput } from "./UserEventUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userEvents?: UserEventUpdateManyWithoutUsersInput;
  username?: string;
};
