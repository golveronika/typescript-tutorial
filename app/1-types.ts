const message: string = 'Hello'

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 2.1

const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> = [1,1,2,3,5,8,13]

// Tuple - массив из разных типов данных
const contact: [string, number] = ['Vladilen', 1234567]

// Any
let variable: any = 42
variable = 'New string'

// Функция ничего нам не вернет - void
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName( 'Veronika' )

// Never 
function throwError( message: string) {
    throw new Error(message)
}

// alias - свои собственные типы
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

//  типы null и undefined
type SomeType = string | null | undefined  