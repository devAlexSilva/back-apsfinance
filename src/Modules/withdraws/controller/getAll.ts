import { Request, Response } from "express";
import { WithdrawPrismaRepository } from "../models/WithdrawPrismaRepository";
import { GetAllService } from "../services/getAll";

export class WithdrawGetAll {
  async getAll(req: Request, res: Response) {
    const repo = new WithdrawPrismaRepository();
    const service = new GetAllService(repo);

    const withdraw = await service.getAllService(req.params.id);
    return res.json(withdraw)
  }
}
