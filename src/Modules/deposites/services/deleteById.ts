import { IDepositeBaseRepository } from "../models/IDepositesBaseRepository";

export class DeleteByIdService {
  constructor(private repository: IDepositeBaseRepository) {}

  async execute(depositeId: string) {
    const deletedDeposite = await this.repository.deleteById(depositeId);
    return deletedDeposite;
  }
}
