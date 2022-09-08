import { prisma } from "../../../Database";
import {
  depositeCreate,
  depositeSave,
  IDepositeBaseRepository,
} from "./IDepositesBaseRepository";

export class DepositePrismaRepository implements IDepositeBaseRepository {
  async create(data: depositeCreate): Promise<depositeSave> {
    const { name, info, price, userId } = data;

    const deposite = await prisma.deposit.create({
      data: {
        name,
        price,
        info,
        userDeposit: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return deposite;
  }

  async getAll(id: string): Promise<depositeSave[] | []> {
    const deposite = await prisma.deposit.findMany({
      where: {
        userId: id,
      },
    });
    return deposite;
  }

  async getByName(userId: string, name: string): Promise<depositeSave | null> {
    const deposite = await prisma.deposit.findFirst({
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

  async deleteById(depositeId: string): Promise<Error | null> {
    try {
    const deletedDeposite = await prisma.deposit.delete({
      where: {id: depositeId},
    });
    // ***********************************************************************
console.log(deletedDeposite)
    return null;
  } catch(err){
    return new Error('there is an error')
}
  }
}
