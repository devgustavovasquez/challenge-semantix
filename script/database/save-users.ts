import { formatUsersResponse } from "script/format-data-users";
import { User } from "./user-schema";

export const saveUsers = (users: formatUsersResponse) => {
  users.forEach(async (user) => {
    await User.create(user)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
};
