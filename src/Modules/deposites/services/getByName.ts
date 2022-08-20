import { IDepositeBaseRepository } from '../models/IDepositesBaseRepository'

export class GetByNameService {
    constructor(private repo: IDepositeBaseRepository){}

    async getByNameService(name: string){
        return await this.repo.getByName(name)
    }
}