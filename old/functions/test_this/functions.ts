export type sn = string | number;

export function isString(value: sn): value is string {
    return typeof value === 'string';
}

export function average(a: number, b: string): string;
export function average(a: string, b: number): string;
export function average(a: number, b: number, c: number): string;
export function average(...args: sn[]): string {
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
