import { Request, Response } from "express";
import { DepositePrismaRepository } from "../models/DepositesPrismaRepository";
import { DeleteByIdService } from "../services/deleteById";

export class DeleteByIdController {
  async execute(req: Request, res: Response) {
    const repository = new DepositePrismaRepository();
    const service = new DeleteByIdService(repository);

    const { depositeId } = req.body;
    console.log('log do controller: ', depositeId)
    const deletedDeposite = await service.execute(depositeId);

    return deletedDeposite instanceof Error
      ? res.status(400).json(deletedDeposite.message)
      : res.json(deletedDeposite);
  }
}
