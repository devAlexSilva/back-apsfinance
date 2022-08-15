interface IUser {
    name: string,
    id: number,
    info: string
}

const LogError: IUser[] = [
    {id: 1, name: "invalid", info: "generic"},
    {id: 2, name: "invalid", info: "name required"},
    {id: 3, name: "invalid", info: "info required"}
]

const outMessage = LogError[0]

console.log(outMessage)