import { IWithdrawBaseRepository } from '../models/IWithdrawBaseRepository'

export class GetAllService {
    constructor(private repo: IWithdrawBaseRepository){}

    async getAllService(userId: string){
        return await this.repo.getAll(userId)
    }
}