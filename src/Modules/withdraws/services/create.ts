import {
  IWithdrawBaseRepository,
  withdrawCreate,
} from "../models/IWithdrawBaseRepository";

export class CreateService {
  constructor(private repository: IWithdrawBaseRepository) {}

  async create(data: withdrawCreate) {
    const existsWithdraw = await this.repository.getByName(
      data.userId,
      data.name
    );

    if (existsWithdraw) throw new Error("this withdraw already exists");

    try {
      const withdraw = await this.repository.create(data);
      return withdraw;
    } catch (err) {
      throw new Error("failed to create");
    }
  }
}
