import { prisma } from "../../../Database";
import {
  withdrawCreate,
  withdrawSave,
  IWithdrawBaseRepository,
} from "./IWithdrawBaseRepository";

export class WithdrawPrismaRepository implements IWithdrawBaseRepository {
  async create(data: withdrawCreate): Promise<withdrawSave> {
    const { name, info, price, userId } = data;

    const withdraw = await prisma.withdrawn.create({
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
    return withdraw;
  }

  async getAll(id: string): Promise<withdrawSave[] | []> {
    const withdraw = await prisma.withdrawn.findMany({
      where: {
        userId: id,
      },
    });
    return withdraw;
  }

  async getByName(userId: string, name: string): Promise<withdrawSave | null> {
    const withdraw = await prisma.withdrawn.findFirst({
      where: {
        userId,
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    return withdraw;
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
