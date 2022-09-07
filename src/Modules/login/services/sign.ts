import { Data, ISignBaseRepository } from "../model/ISignBaseRepository";

export class Sign {
  constructor(private repository: ISignBaseRepository) {}

  async execute(data: Data) {
    const handleLogin = await this.repository.execute(data);
    return handleLogin;
  }
}
