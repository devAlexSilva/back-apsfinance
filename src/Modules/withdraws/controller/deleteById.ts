import { Request, Response } from "express";
import { WithdrawPrismaRepository } from "../models/WithdrawPrismaRepository";
import { DeleteWithdrawService } from "../services/deleteById";

export class DeleteWithdrawController {
  async execute(req: Request, res: Response) {
    const repository = new WithdrawPrismaRepository();
    const service = new DeleteWithdrawService(repository);

    const { withdrawId } = req.body;
    const deletedWithdraw = await service.execute(withdrawId);

    return deletedWithdraw instanceof Error
      ? res.status(400).json(deletedWithdraw.message)
      : res.json(deletedWithdraw);
  }
}
