import {
  IDepositeBaseRepository,
  depositeCreate,
} from "../models/IDepositesBaseRepository";

export class CreateService {
  constructor(private repository: IDepositeBaseRepository) {}

  async create(data: depositeCreate) {
    const deposite = await this.repository.create(data);
    return deposite;
  }
}
