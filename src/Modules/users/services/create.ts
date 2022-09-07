import { IUserBaseRepository, userCreate } from "../model/IuserBaseRepository";

export class CreateService {
    constructor(private repository: IUserBaseRepository){}

    async create(data: userCreate) {
        try {
            const user = await this.repository.create(data)
            return user
        } catch (err) {
            throw new Error(`${err}`)
        }
    }
}