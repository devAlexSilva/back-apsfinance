import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { CreateService } from "../services/create";

export class DepositeCreate {
  async create(req: Request, res: Response) {
    const repository = new DepositePrismaRepository();
    const service = new CreateService(repository);

    const userId = req.params.id;
    const data = { ...req.body, userId };

    const deposite = await service.create(data);

    return deposite instanceof Error
      ? res.status(400).json(deposite.message)
      : res.json(deposite);
  }
}
