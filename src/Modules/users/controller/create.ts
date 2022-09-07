import { Request, Response } from "express";
import { CreateService } from "../services/create";
import { UserPrismaRepository } from "../model/userPrismaRepository";

export class CreateUserController {
  async create(req: Request, res: Response) {
    const repository = new UserPrismaRepository();
    const service = new CreateService(repository);

    const newUser = await service.create(req.body);
    return newUser instanceof Error
      ? res.status(400).json(newUser.message)
      : res.json(newUser);
  }
}
