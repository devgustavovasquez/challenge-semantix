import { iAddress } from "../models/addresses";
import { iContact } from "../models/contacts";
import { iUser } from "../models/users";
import { UserFormated } from "../models/users-formated";

export const formatDataUsersUseCase = (
  users: iUser[],
  addressesList: iAddress[][],
  contactsList: iContact[][]
): UserFormated[] => {
  const formatedDataUsers = users.map((user) => {
    // filter by userId and verify and if isn't empty
    const address = addressesList.filter(
      (addresses) => addresses[0]?.userId === user.id
    );
    const contact = contactsList.filter(
      (contacts) => contacts[0]?.userId === user.id
    );

    // .flat() remove subarrays
    return new UserFormated(user, address.flat(), contact.flat());
  });

  return formatedDataUsers;
};
