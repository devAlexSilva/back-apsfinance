import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { DeleteDepositeService } from "../services/deleteById";

export class DeleteDepositeController {
  async execute(req: Request, res: Response) {
    const repository = new DepositePrismaRepository();
    const service = new DeleteDepositeService(repository);

    const { depositeId } = req.body;
    console.log('log do controller: ', depositeId)
    const deletedDeposite = await service.execute(depositeId);

    return deletedDeposite instanceof Error
      ? res.status(400).json(deletedDeposite.message)
      : res.json(deletedDeposite);
  }
}
