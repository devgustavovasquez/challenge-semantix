import { iUser } from "@src/models/users";
import { get } from "@src/util/axios-request";
import { handleErrorGetRequest } from "@src/util/errors/handle-error-get-request";

export type getAllUsersResponse = iUser[];

export const getAllUsersUseCase = async (
  url: string
): Promise<getAllUsersResponse> => {
  try {
    const users = await get<iUser[]>(url).then((res) => res.data);
    return users;
  } catch (error) {
    return handleErrorGetRequest(error);
  }
};
