import 'reflect-metadata';

const RANGE_KEY = 'design:RANGE_KEY'

export function Range(min: number, max: number) {
    return (target: any, key: string, index: number): void => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key)
    };
}

export function Validate(
    target: any,
    key: string,
    descriptor: PropertyDescriptor): void {
    const originalFn = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const paramValue = Number(args[Number(paramIndex)]);
            if (paramValue < min || paramValue > max) {
                throw new Error(`Error in ${target.constructor.name} instance.
                Parameter of method ${key} on position ${Number(paramIndex) + 1}  out of range [${[min, max]}].
                Current value ${paramValue}
                `)
            }
        }
        return originalFn.call(this, ...args);
    }
}
