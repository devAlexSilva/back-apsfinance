import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { GetAllService } from "../services/getAll";

export class DepositeGetAll {
  async getAll(req: Request, res: Response) {
    const repo = new DepositePrismaRepository();
    const service = new GetAllService(repo);

    const deposites = await service.getAllService(req.params.id);
    return res.json(deposites)
  }
}
