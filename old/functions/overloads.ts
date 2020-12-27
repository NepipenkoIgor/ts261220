type sn = string | number;

function isString(value: sn): value is string {
    return typeof value === 'string';
}

function average(a: number, b: string): string;
function average(a: string, b: number): string;
function average(a: number, b: number, c: number): string;
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
average('1', '1');
average(1, '1');
average('1', 1);
average(1, 1, 1);
average(1, 's', 1)
let a: number = average(1, 1, 1);
