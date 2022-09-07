import { IDepositeBaseRepository } from '../models/IDepositesBaseRepository'

export class GetByNameService {
    constructor(private repo: IDepositeBaseRepository){}

    async getByNameService(useId: string, name: string){
        return await this.repo.getByName(useId, name)
    }
}