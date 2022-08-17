import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/IDepositesPrismaRepository";
import { CreateService } from "../services/create";

class DepositeController {
  async create(req: Request, res: Response) {
    const repository = new DepositePrismaRepository();
    const service = new CreateService(repository);

    const deposite = await repository.create(req.body);
    return res.json(deposite);
  }
}
