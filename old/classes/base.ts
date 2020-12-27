interface IPoint {
    x: number;
}

class BasePoint implements IPoint {

    #p = 1;

    public constructor(
        public readonly x: number,
        protected readonly y: number,
        private readonly z: number,
    ) {
        console.log(this.#p, this.z);
    }

    public sum(): number {
        return this.x + this.y;
    }
}

type Constructable = new (...args: any[]) => any;

function Timestamped<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamped = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'js'];
    }
}


class Point extends Tagged(Timestamped(BasePoint)) {
    public constructor(
        x: number,
        y: number,
        z: number,
    ) {
        super(x, y, z);
    }

    public sum(): number {
        // do my logic
        return super.sum();
    }
}

let p = new BasePoint(1, 1, 1);
let p1 = new Point(1, 1, 1);

console.log(p1.timestamped);
console.log(p1.tags);


class Singleton {
    private static _instance: Singleton;

    private constructor() {
    }

    public static get instance() {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

let inst1 = Singleton.instance;
let inst2 = Singleton.instance;
let inst3 = Singleton.instance;
let inst4 = Singleton.instance;
let inst5 = Singleton.instance;

console.log(inst2 === inst5)


abstract class AbstractControl<T> {
    public abstract model: T;

    public abstract getValue(): T;

    public onFocus() {

    }

    public onBlur() {

    }

}

abstract class AbstractControlWithSet<T> extends AbstractControl<T> {
    public abstract setValue(v: T): void;
}

interface DropDownItem {
    text: string;
    value: string
}

class MHDropDown extends AbstractControlWithSet<DropDownItem[]> {
    public model: DropDownItem[] = [];

    public getValue(): DropDownItem[] {
        return this.model;
    }

    public setValue(v: DropDownItem[]) {
        this.model = v;
    }
}

class MHInput extends AbstractControlWithSet<string> {
    public model: string = '';

    public getValue(): string {
        return this.model;
    }

    public setValue(v: string) {
        this.model = v;
    }
}


let el = new MHDropDown();


class User<ID> {
    id!: ID

    create(): this {
        return this;
    }
}

class Admin extends User<number> {
    create(): this {
        return super.create();
    }
}


