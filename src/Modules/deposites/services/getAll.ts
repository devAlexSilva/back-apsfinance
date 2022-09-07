import { IDepositeBaseRepository } from '../models/IDepositesBaseRepository'

export class GetAllService {
    constructor(private repo: IDepositeBaseRepository){}

    async getAllService(userId: string){
        return await this.repo.getAll(userId)
    }
}