import { IWithdrawBaseRepository } from "../models/IWithdrawBaseRepository";

export class DeleteByIdService {
  constructor(private repository: IWithdrawBaseRepository) {}

  async execute(withdrawId: string) {
    const deletedWithdraw = await this.repository.deleteById(withdrawId);
    return deletedWithdraw;
  }
}
