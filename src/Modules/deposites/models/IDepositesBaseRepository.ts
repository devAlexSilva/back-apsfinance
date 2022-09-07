export type depositeCreate = {
    name: string,
    price: number,
    info: string
    userId: string
}

export type depositeSave = {
    id: string,
    name: string,
    price: number,
    info: string,
    userId: string
}

export interface IDepositeBaseRepository {
    create(data: depositeCreate) : Promise<depositeSave>
    getAll(userId: string) : Promise<depositeSave[] | []>
    getByName(userId: string, name: string) : Promise<depositeSave | null>

}