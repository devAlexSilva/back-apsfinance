import { Request, Response } from "express";
import { WithdrawPrismaRepository } from "../models/WithdrawPrismaRepository";
import { CreateService } from "../services/create";

export class WithdrawCreate {
  async create(req: Request, res: Response) {
    const repository = new WithdrawPrismaRepository();
    const service = new CreateService(repository);

    const userId = req.params.id;
    const data = { ...req.body, userId };

    const withdraw = await service.create(data);
    return res.json(withdraw);
  }
}
