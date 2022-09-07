import {
  IDepositeBaseRepository,
  depositeCreate,
} from "../models/IDepositesBaseRepository";

export class CreateService {
  constructor(private repository: IDepositeBaseRepository) {}

  async create(data: depositeCreate) {
    const existsDeposite = await this.repository.getByName(data.userId, data.name);

    if (existsDeposite) throw new Error("this product already exists");

    try {
      const deposite = await this.repository.create(data);
      return deposite;
    } catch (err) {
      throw new Error(`${err} \n\nfailed to create`);
    }
  }
}
