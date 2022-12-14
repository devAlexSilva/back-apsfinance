import { ISignBaseRepository, Data } from "./ISignBaseRepository";
import { prisma } from "../../../Database";
import * as jwt from "jsonwebtoken";

export const secret = process.env.JWT_SECRET || "s";

export class SignPrismaRepository implements ISignBaseRepository {
  async execute({ email, password }: Data) {
    if (!email || !password) return new Error("email and password is required");

    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!user) return new Error("credentials is wrong");

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "3h" });
    return { user, token };
  }
}
