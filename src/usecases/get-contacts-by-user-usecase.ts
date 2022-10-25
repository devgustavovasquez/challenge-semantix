import { iContact } from "@src/models/contacts";
import { iUser } from "@src/models/users";
import { get } from "@src/util/axios-request";
import { handleErrorGetRequest } from "@src/util/errors/handle-error-get-request";

export type getContactsByUserResponse = Array<iContact[]>;

// get single array of contacts by user.id and return this in a array
export const getContactsByUserUseCase = async (
  url: string,
  users: iUser[]
): Promise<getContactsByUserResponse> => {
  try {
    const contacts: getContactsByUserResponse = [];
    for (const user of users) {
      contacts.push(
        await get<iContact[]>(`${url}/${user.id}/contacts`).then(
          (res) => res.data
        )
      );
    }

    return contacts;
  } catch (error) {
    return handleErrorGetRequest(error);
  }
};
