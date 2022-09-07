import { prisma } from "../../../Database";
import {
  IUserBaseRepository,
  userCreate,
  userSave,
} from "./IuserBaseRepository";

export class UserPrismaRepository implements IUserBaseRepository {
    async create(data: userCreate): Promise<userSave | string> {
        const { email, password } = data
        try{
        const user = await prisma.user.create({
            data: {
                email,
                password
            }
        })
        return user
    } catch(err){
        return `creation failed with error: 
        ${err}`
    }
    }
}