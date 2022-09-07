export type Data = {
    email: string,
    password: string
}

export type UserLoged = {
    user: {
        id: string,
        email: string
    },
    token: string
}

export interface ISignBaseRepository {
    execute(data: Data) : Promise<Error | UserLoged>
}