import { Router } from "express";
import { Authentication } from "../Authentication/auth";
import { DepositeCreate } from "../Modules/deposites/controller/Create";
import { DepositeGetAll } from "../Modules/deposites/controller/getAll";
import { DepositeGetByName } from "../Modules/deposites/controller/getByName";
import { SignController } from "../Modules/login/controller/sign";
import { CreateUserController } from "../Modules/users/controller/create";
import { DeleteByIdController } from "../Modules/deposites/controller/deleteById";

const route = Router();
const create = new DepositeCreate().create;
const getAllDeposites = new DepositeGetAll().getAll;
const getByNameDeposites = new DepositeGetByName().get;
const createUser = new CreateUserController().create;
const login = new SignController().execute;
const deleteDeposite = new DeleteByIdController().execute;

route.post("/login", login);
route.post("/users", createUser);
route.post("/deposites", Authentication, create);
route.get("/deposites", Authentication, getAllDeposites);
route.get("/deposites/:name", Authentication, getByNameDeposites);
route.delete("/deposites", Authentication, deleteDeposite);

export { route };
