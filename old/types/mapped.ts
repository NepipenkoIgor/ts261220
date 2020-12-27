type OptionalReadOnly<T> = {
    -readonly [P in keyof T]-?: T[P]
}


let a: OptionalReadOnly<{ readonly name: string, age?: number }> = {
    name: 'Ihor',
    age: 34
}

a.name = 'Lena';


interface IPerson {
    readonly name: string;
    age: number;
    info: { male: boolean },
    subject?: string[]
}
// IPerson['age' | 'name']

type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T]

const p1: RemoveByType<IPerson, {male: boolean, salary: number}> = 'info'

const p1: Exclude<any, any>
