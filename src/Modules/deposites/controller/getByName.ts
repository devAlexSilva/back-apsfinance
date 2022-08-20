import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { GetByNameService } from "../services/getByName";

export class DepositeGetByName {
  async get(req: Request, res: Response) {
    const repo = new DepositePrismaRepository();
    const service = new GetByNameService(repo);

    const deposites = await service.getByNameService(req.params.name);
    return res.json(deposites)
  }
}
