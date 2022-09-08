import { IWithdrawBaseRepository } from '../models/IWithdrawBaseRepository'

export class GetByNameService {
    constructor(private repo: IWithdrawBaseRepository){}

    async getByNameService(userId: string, name: string){
        return await this.repo.getByName(userId, name)
    }
}