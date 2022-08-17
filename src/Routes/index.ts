import { Router } from "express";
import { DepositeController } from "../Modules/deposites/controller/Create";

const route = Router();
const DepositeCreate = new DepositeController()

route.post('/deposites', DepositeCreate.create)

export { route }