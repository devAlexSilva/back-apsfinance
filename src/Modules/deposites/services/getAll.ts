import { IDepositeBaseRepository } from '../models/IDepositesBaseRepository'

export class GetAllService {
    constructor(private repo: IDepositeBaseRepository){}

    async getAllService(){
        return await this.repo.findAll()
    }
}