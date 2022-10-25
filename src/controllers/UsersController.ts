import { Request, Response } from "express";
import { handleErrorGetRequest } from "@src/util/errors/handle-error-get-request";
import { getAllUsersUseCase } from "@src/usecases/get-all-users-usecase";

export const UsersController = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, limit = 100, sortBy = "id", order = "asc" } = req.query;

      const usersQuery = `?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`;

      // get Users and data about them
      const users = await getAllUsersUseCase(
        `${process.env.API_BASE_URL}${usersQuery}`
      );

      return res.status(200).send(users);
    } catch (err) {
      return handleErrorGetRequest(err);
    }
  },
};
