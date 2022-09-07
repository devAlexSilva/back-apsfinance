import { prisma } from "../../../Database";
import {
  IUserBaseRepository,
  userCreate,
  userSave,
} from "./IuserBaseRepository";

export class UserPrismaRepository implements IUserBaseRepository {
  async create(data: userCreate): Promise<userSave | Error> {
    const { email, password } = data;
    if (!email || !password) return new Error("email and password is required");

    const userExists = await prisma.user.findFirst({
      where: { email },
    });

    if (userExists) return new Error("user already exists");

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  }
}
