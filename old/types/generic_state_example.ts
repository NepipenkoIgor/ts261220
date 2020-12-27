interface IProduct {
    name: string;
    price: number;
}

interface IUser {
    name: string;
    age: number;
}

interface ICartProduct extends IProduct {
    count: number;
}

interface IState {
    user: IUser;
    products: IProduct[];
    cart: ICartProduct[];
}

const state: IState = {
    user: {name: 'Ihor', age: 34},
    products: [{name: 'IPhone XR', price: 200}],
    cart: [{name: 'IPhone XR', price: 200, count: 2}]
}

// cart extends 'user' |  'products'  | 'cart'
type Select<State> = <Field extends (keyof State)>(state: State, field: Field) => State[Field];

const select: Select<IState> = (store, field) => store[field];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
