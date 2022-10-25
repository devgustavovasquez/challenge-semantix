import { UsersController } from "../controllers/UsersController";
import express from "express";
const routes = express.Router();

routes.get("/users", UsersController.index);

export default routes;
