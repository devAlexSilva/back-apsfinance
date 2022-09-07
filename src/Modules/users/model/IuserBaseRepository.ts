export type userCreate = {
    email: string,
    password: string
}

export type userSave = {
    id: string,
    email: string,
    password: string
}

export interface IUserBaseRepository {
    create(data: userCreate) : Promise<userSave | string>
}