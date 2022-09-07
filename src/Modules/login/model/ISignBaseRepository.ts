export type data = {
    email: string,
    password: string
}

export type Response = {
    user: {
        id: string,
        email: string
    },
    token: string
}

export interface ISignBaseRepository {
    execute(data: data) : Promise<Error | Response>
}