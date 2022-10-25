import { iAddress } from "../models/addresses";
import { iUser } from "../models/users";
import { get } from "../util/axios-request";
import { handleErrorGetRequest } from "../util/errors/handle-error-get-request";

export type getAddressesByUserResponse = Array<iAddress[]>;

// get single array of addresses by user.id and return this in a array
export const getAddressesByUserUseCase = async (
  url: string,
  users: iUser[]
): Promise<getAddressesByUserResponse> => {
  try {
    const addresses: getAddressesByUserResponse = [];
    for (const user of users) {
      addresses.push(
        await get<iAddress[]>(`${url}/${user.id}/address`).then(
          (res) => res.data
        )
      );
    }

    return addresses;
  } catch (error) {
    return handleErrorGetRequest(error);
  }
};
