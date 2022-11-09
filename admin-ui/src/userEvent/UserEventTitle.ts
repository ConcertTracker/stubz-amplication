import { UserEvent as TUserEvent } from "../api/userEvent/UserEvent";

export const USEREVENT_TITLE_FIELD = "id";

export const UserEventTitle = (record: TUserEvent): string => {
  return record.id || record.id;
};
