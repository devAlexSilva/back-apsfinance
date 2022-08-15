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
    findAll() : Promise<depositeSave[] | null>
    findByName(name: string) : Promise<depositeSave[] | null>

}