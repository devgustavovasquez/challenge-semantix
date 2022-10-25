import { iUser } from "../models/users";
import { get } from "../util/axios-request";
import { handleErrorGetRequest } from "../util/errors/handle-error-get-request";

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
