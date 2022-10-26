import { formatUsersResponse } from "script/format-data-users";
import { User } from "./user-schema";

export const saveUsers = async (users: formatUsersResponse) => {
  try {
    for (const user of users) {
      await User.create(user);
    }
  } catch (error) {
    throw error as unknown;
  }
};
