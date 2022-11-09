import { SortOrder } from "../../util/SortOrder";

export type UserEventOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
