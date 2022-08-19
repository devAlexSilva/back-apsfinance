import { Router } from "express";
import { DepositeCreate } from "../Modules/deposites/controller/Create";

const route = Router();
const create = new DepositeCreate().create

route.post('/deposites', create)

export { route }