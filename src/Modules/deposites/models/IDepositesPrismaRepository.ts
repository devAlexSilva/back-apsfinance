import { prisma } from "../../../Database";
import {
  depositeCreate,
  depositeSave,
  IDepositeBaseRepository,
} from "./IDepositesBaseRepository";

export class DepositePrismaRepository implements IDepositeBaseRepository {
  async create(data: depositeCreate): Promise<depositeSave> {
    const { name, info, price } = data;

    const deposite = await prisma.deposit.create({
      data: {
        name,
        price,
        info,
      },
    });
    return deposite;
  }

  async findAll(): Promise<depositeSave[] | []> {
    const deposite = await prisma.deposit.findMany({});
    return deposite;
  }

  async findByName(name: string): Promise<depositeSave[] | null> {
    const deposite = await prisma.deposit.findFirst({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    }) 
    return deposite;
  }
}
