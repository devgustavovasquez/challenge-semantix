import { Request, Response } from "express";
import { handleErrorGetRequest } from "../util/errors/handle-error-get-request";
import { getAllUsersUseCase } from "../usecases/get-all-users-usecase";
import { getAddressesByUserUseCase } from "../usecases/get-addresses-by-user-usecase";
import { getContactsByUserUseCase } from "../usecases/get-contacts-by-user-usecase";
import { formatDataUsersUseCase } from "../usecases/format-data-users-usecase";

export const UsersController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      //default query params
      const { page = 1, limit = 10, sortBy = "id", order = "asc" } = req.query;

      const usersQuery = `?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`;

      // get Users and data about them
      const users = await getAllUsersUseCase(
        `${process.env.API_BASE_URL}${usersQuery}`
      );

      const addresses = await getAddressesByUserUseCase(
        `${process.env.API_BASE_URL}`,
        users
      );

      const contacts = await getContactsByUserUseCase(
        `${process.env.API_BASE_URL}`,
        users
      );

      // format all responses like UserFormated Model
      const finalResponseUsersFormated = formatDataUsersUseCase(
        users,
        addresses,
        contacts
      );

      return res.status(200).send(finalResponseUsersFormated);
    } catch (err) {
      return handleErrorGetRequest(err);
    }
  },
};
