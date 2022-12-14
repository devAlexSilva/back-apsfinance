import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { GetByNameService } from "../services/getByName";

export class DepositeGetByName {
  async get(req: Request, res: Response) {
    const repo = new DepositePrismaRepository();
    const service = new GetByNameService(repo);
    const userId = req.params.id
    const name = req.params.name

    const deposites = await service.getByNameService(userId, name);
    return res.json(deposites)
  }
}
