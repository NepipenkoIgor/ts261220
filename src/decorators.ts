import 'reflect-metadata';

export function LogInputValue(
    _target: any,
    key: string,
    descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log(_target);

    const originalValue = descriptor.value
    return {
        ...descriptor,
        value(e: Event) {
            const inputRef = e.target as HTMLInputElement;
            console.log(`Input value in method ${key} of ${_target.constructor.name} equal to ${inputRef.value}`)
            originalValue.call(this, e)
        }
    }
}


export function LogToSentry(
    _target: any,
    _key: string,
    descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log(_target);

    const originalValue = descriptor.value
    return {
        ...descriptor,
        value(e: Event) {
            try {
                originalValue.call(this, e)
            } catch (err) {
                console.log('error', err)
                // http protocol send to sentry
            }

        }
    }
}


export function Debounce(ms: number) {
    let timeId: number | null;
    return (
        _target: any,
        _key: string,
        descriptor: PropertyDescriptor): PropertyDescriptor => {
        console.log(_target);

        const originalValue = descriptor.value
        return {
            ...descriptor,
            value(...args: any[]) {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = window.setTimeout(() => {
                    originalValue.call(this, ...args)
                }, ms)

            }
        }
    }
}


export function SavePersistence(target: any, key: string): void {
    const localKey = `${target.constructor.name}_${key}`;
    const getter = () => {
        return localStorage.getItem(localKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(localKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}

export function CheckTypeInRuntime(target: any, key: string): void {
    console.log('design:type =====>', Reflect.getMetadata('design:type', target, key))
    const {name: type} = Reflect.getMetadata('design:type', target, key);
    let value: any;
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue: any) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw new Error(`type of ${key} is not ${actualType}. You tried to set ${realType}`)
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    })

}
