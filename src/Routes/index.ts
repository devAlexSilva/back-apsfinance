import { Router } from "express";
import { DepositeCreate } from "../Modules/deposites/controller/Create";
import { DepositeGetAll } from "../Modules/deposites/controller/getAll";
import { DepositeGetByName } from "../Modules/deposites/controller/getByName";
import { CreateUserController } from "../Modules/users/controller/create";

const route = Router();
const create = new DepositeCreate().create;
const getAllDeposites = new DepositeGetAll().getAll;
const getByNameDeposites = new DepositeGetByName().get;
const createUser = new CreateUserController().create;

route.post("/users", createUser);
route.post("/deposites", create);
route.get("/deposites", getAllDeposites);
route.get("/deposites/:name", getByNameDeposites);

export { route };