import { Router } from "express";
import { Authentication } from "../Authentication/auth";
import { SignController } from "../Modules/login/controller/sign";
import { CreateUserController } from "../Modules/users/controller/create";
import { DepositeCreate } from "../Modules/deposites/controller/Create";
import { DepositeGetAll } from "../Modules/deposites/controller/getAll";
import { DepositeGetByName } from "../Modules/deposites/controller/getByName";
import { DeleteDepositeController } from "../Modules/deposites/controller/deleteById";
import { WithdrawCreate } from "../Modules/withdraws/controller/Create";
import { WithdrawGetAll } from "../Modules/withdraws/controller/getAll";
import { WithdrawGetByName } from "../Modules/withdraws/controller/getByName";
import { DeleteWithdrawController } from "../Modules/withdraws/controller/deleteById";

const route = Router();

const createDeposites = new DepositeCreate().create;
const getAllDeposites = new DepositeGetAll().getAll;
const getByNameDeposites = new DepositeGetByName().get;
const deleteDeposite = new DeleteDepositeController().execute;

const createUser = new CreateUserController().create;
const login = new SignController().execute;

const createWithdraw = new WithdrawCreate().create;
const getAllWithdraw = new WithdrawGetAll().getAll;
const getByNameWithdraw = new WithdrawGetByName().get;
const deleteWithdraw = new DeleteWithdrawController().execute;

route.post("/login", login);
route.post("/users", createUser);

route.post("/deposites", Authentication, createDeposites);
route.get("/deposites", Authentication, getAllDeposites);
route.get("/deposites/:name", Authentication, getByNameDeposites);
route.delete("/deposites", Authentication, deleteDeposite);

route.post("/withdraws", Authentication, createWithdraw);
route.get("/withdraws", Authentication, getAllWithdraw);
route.get("/withdraws/:name", Authentication, getByNameWithdraw);
route.delete("/withdraws", Authentication, deleteWithdraw);

export { route };
