export type depositeCreate = {
    name: string,
    price: number,
    info: string
}

export type depositeSave = {
    id: string,
    name: string,
    price: number,
    info: string
}

export interface IDepositeBaseRepository {
    create(data: depositeCreate) : Promise<depositeSave>
    getAll() : Promise<depositeSave[] | []>
    getByName(name: string) : Promise<depositeSave | null>

}