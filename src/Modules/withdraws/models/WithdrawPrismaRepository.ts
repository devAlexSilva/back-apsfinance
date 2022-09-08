import { prisma } from "../../../Database";
import {
  withdrawCreate,
  withdrawSave,
  IDepositeBaseRepository,
} from "./IWithdrawBaseRepository";

export class DepositePrismaRepository implements IDepositeBaseRepository {
  async create(data: withdrawCreate): Promise<withdrawSave> {
    const { name, info, price, userId } = data;

    const deposite = await prisma.withdrawn.create({
      data: {
        name,
        price,
        info,
        userWithdrawn: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return deposite;
  }

  async getAll(id: string): Promise<withdrawSave[] | []> {
    const deposite = await prisma.withdrawn.findMany({
      where: {
        userId: id,
      },
    });
    return deposite;
  }

  async getByName(userId: string, name: string): Promise<withdrawSave | null> {
    const deposite = await prisma.withdrawn.findFirst({
      where: {
        userId,
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    return deposite;
  }

  async deleteById(withdrawId: string): Promise<Error | null> {
    try {
      await prisma.withdrawn.delete({
        where: { id: withdrawId },
      });
      return null;
    } catch (err) {
      return new Error("there is an error");
    }
  }
}
