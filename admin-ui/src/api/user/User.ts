import { JsonValue } from "type-fest";
import { UserEvent } from "../userEvent/UserEvent";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userEvents?: Array<UserEvent>;
  username: string;
};
