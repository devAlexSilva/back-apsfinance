import { SignPrismaRepository } from "../model/SignPrismaRepository";
import { Sign } from "../services/sign";
import { Request, Response } from "express";

export class SignController {
  async execute(req: Request, res: Response) {
    const repository = new SignPrismaRepository();
    const service = new Sign(repository);

    const userLoged = await service.execute(req.body);

    return userLoged instanceof Error
      ? res.status(400).json(userLoged.message)
      : res.json(userLoged);
  }
}
