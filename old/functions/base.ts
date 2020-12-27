// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 's', 1)
// let a: number = average(1, 1, 1);


// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (b === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 1);
// average(1, 's', 1)
// let a: number = average(1, 1, 1);


// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 1);
// average(1, 's', 1)
// let a: number = average(1, 1, 1);

// type AverageFn = (...args: number[]) => string;
// type sn = string | number
// const average: AverageFn = function (...args: number[]): string {
//     let total: number = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 1);
// average(1, 1, 1, 2, 3);
// average(1, 's', 1)
// let a: number = average(1, 1, 1);

type sn = string | number;

function isString(value: sn): value is string {
    return typeof value === 'string';
}


function average(...args: sn[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}

average(1);
average(1, 1);
average(1, 1, 1, 2, 3);
average(1, 's', 1)
let a: number = average(1, 1, 1);
