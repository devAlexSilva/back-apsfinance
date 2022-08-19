import { Router } from "express";
import { DepositeCreate } from "../Modules/deposites/controller/Create";
import { DepositeGetAll } from "../Modules/deposites/controller/getAll";

const route = Router();
const create = new DepositeCreate().create
const getAllDeposites = new DepositeGetAll().getAll

route.post('/deposites', create)
route.get('/deposites', getAllDeposites)

export { route }