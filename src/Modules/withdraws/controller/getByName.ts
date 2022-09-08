import { Request, Response } from "express";
import { WithdrawPrismaRepository } from "../models/WithdrawPrismaRepository";
import { GetByNameService } from "../services/getByName";

export class WithdrawGetByName {
  async get(req: Request, res: Response) {
    const repo = new WithdrawPrismaRepository();
    const service = new GetByNameService(repo);
    const userId = req.params.id
    const name = req.params.name

    const withdraw = await service.getByNameService(userId, name);
    return res.json(withdraw)
  }
}
