// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;


import { CheckTypeInRuntime, Debounce, LogInputValue, LogToSentry, SavePersistence } from './decorators';
import { Range, Validate } from './utils';

class SearchComponent {

    @CheckTypeInRuntime
    @SavePersistence
    public initialValue!: string;

    public constructor(
        private readonly inputEl: HTMLInputElement
    ) {
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
        console.log('send to server', this.initialValue)
    }

    @Debounce(300)
    @LogToSentry
    @LogInputValue
    private onSearch(_e: Event): void {
        this.initialValue = (_e.target as HTMLInputElement).value;
    }
}

const inputEl = document.querySelector('input') as HTMLInputElement;
const searchWidget = new SearchComponent(inputEl);
console.log(searchWidget);

// setTimeout(() => {
//     (searchWidget.initialValue as any) = 123;
// }, 5000)


class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70)  _newValue: number
    ): void {
        console.log(_oldValue, _newValue)
    }
}

const calc = new Calculator();
setTimeout(() => {
    calc.updatePercentage(40, 80)
}, 5000)
