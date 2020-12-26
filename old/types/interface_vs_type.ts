// Object/Functions
// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
// let p1: IPoint = {x: 1, y: 2};
// let p2: TPoint = {x: 1, y: 2};
//
//
// type TSetPoint = (x: number, y: number) => void;
//
// interface ISetPoint {
//     (x: number, y: number): void;
// }
//
// let sp1: TSetPoint = (_x: number, _y: number): void => {
//
// }
//
// let sp2: ISetPoint = (_x: number, _y: number): void => {
//
// }

/**extends**/

type TPointX = {
    x: number;
}

type TPointY = {
    y: number;
}

interface IPointX {
    x: number;
}

interface IPointY {
    y: number;
}

interface IPoint extends IPointX, TPointY {

}

let p: IPoint = {
    x: 10,
    y: 10
}

type TPoint = TPointX & IPointY;

let p1: TPoint = {
    x: 10,
    y: 10
}

/**implements*/
class Point implements IPointX, TPointY, snb {
    x = 10;
    y = 10;
}


/**1**/
type snb = string | number | boolean;

/**2*/
type TAccount = {
    name: string
}

type TAccount = {
    age: number
}


interface IAccountName {
    name: string,
    info: {
        male: boolean
    }
}

interface IAccountAge {
    age: number,
    info: {
        salary: number
    }
}

interface IAccount extends IAccountName, IAccountAge {
    info: {
        salary: number,
        male: boolean
    }
}

let u: IAccount = {
    name: 'Ihor'
}

interface IAccountInfo {
    male: boolean,
    salary: {
        value: number,
        currency: number
    },

}

interface IAccount {
    name: string,
    info: IAccountInfo
}


interface IProduct {
    title: string;
    price: number;
}

interface ICartProduct extends IProduct {
    count: number;
}
