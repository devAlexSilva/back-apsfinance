export type withdrawCreate = {
    name: string,
    price: number,
    info: string
    userId: string
}

export type withdrawSave = {
    id: string,
    name: string,
    price: number,
    info: string,
    userId: string
}

export interface IDepositeBaseRepository {
    create(data: withdrawCreate) : Promise<withdrawSave>
    getAll(userId: string) : Promise<withdrawSave[] | []>
    getByName(userId: string, name: string) : Promise<withdrawSave | null>
    deleteById(withdrawId: string) : Promise<Error | null>
}