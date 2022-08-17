import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/IDepositesPrismaRepository";


class DepositeController {

    async create(req: Request, res: Response){
        const repository = new DepositePrismaRepository()
        
        const deposite = await repository.create(req.body)
        return res.json(deposite)
    }
}