// вспомогательные оперраторы помогают взаимодействовать с типами

interface Person {
    name: string
    age:number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = "age"

// key = "job" - некорректно



type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Если хотим работать с типом, но не включающим в себя какие-то поля Exclude | Pick

// 1 способ - указываем что исключать
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
// 2 способ - указываем что оставлять
type UserKeysWithMeta = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta  = "name"
// u1  = _id - некорректно
