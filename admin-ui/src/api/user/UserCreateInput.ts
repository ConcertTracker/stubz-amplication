import { InputJsonValue } from "../../types";
import { UserEventCreateNestedManyWithoutUsersInput } from "./UserEventCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userEvents?: UserEventCreateNestedManyWithoutUsersInput;
  username: string;
};
