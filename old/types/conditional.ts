// T extends U ? X : Y

// type NonUndefined<T> = T extends undefined | boolean ? never : T;
//
// let value: NonUndefined<undefined | string | boolean> = 3

interface IUser {
    name: string,
    age: number
}

//
// const arr: [() => void, () => number | null] = [() => ({}), () => 1];
//
//
//
// type FirstElReturnType<T> =
//     T extends [infer U, ...unknown[] ]
//          ? U extends (...args: unknown[]) => infer R
//               ? R
//               : never
//          : never
//
//
// let value: FirstElReturnType<typeof arr>  = undefined


type NoNFunction<T> = T extends (...args: any[]) => any ? never : T

type FunctionParamsAndReturnValue<T> = T extends (...args: infer Args) => infer R
    ? NoNFunction<Args[keyof Args]> | R
    : never

function fn(_a: IUser, _b: string): boolean {
    return true;
}

const v1: FunctionParamsAndReturnValue<typeof fn> = null;

let v2: Record<any, any>
