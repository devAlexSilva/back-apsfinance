import { IDepositeBaseRepository } from '../models/IDepositesBaseRepository'

export class GetByNameService {
    constructor(private repo: IDepositeBaseRepository){}

    async getByNameService(userId: string, name: string){
        return await this.repo.getByName(userId, name)
    }
}