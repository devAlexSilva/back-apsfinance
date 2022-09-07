import { Request, Response } from "express";
import { CreateService } from "../services/create";
import { UserPrismaRepository } from "../model/userPrismaRepository";


export class CreateUserController{

    async create(req: Request, res: Response) {
        const repository = new UserPrismaRepository() 
        const service = new CreateService(repository)
        try {
            const newUser = await service.create(req.body)
            return newUser
        } catch (err) {
            return {
                message: "there is an error",
                error: err
            }
        }

    }
}