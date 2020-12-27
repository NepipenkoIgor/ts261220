function fn(a: any, b: any) {

}

fn(1, 'sda');
fn('asd', 1);

interface IBaseInfo {
    age: number;
    male: boolean;
}

// Interface/Type/Function/Class
interface IAccount<GeneralInformation extends IBaseInfo, Id = string> {
    id: Id,
    name: string,
    info: GeneralInformation
}

let user: IAccount<IBaseInfo & { salary: number }, number> = {
    id: 1,
    name: 'Ihor',
    info: {
        age: 34,
        male: true,
        salary: 4000
    }
}

let admin: IAccount<IBaseInfo & { subject: string[] }> = {
    id: 'asdads123123',
    name: 'Lena',
    info: {
        age: 34,
        male: false,
        subject: ['ts', 'angular', 'js']
    }
}

let arr: Array<number>


// class Model<ModelValue> {
//     value!: ModelValue;
// }
//
// interface Provider {
//     model: typeof Model<number>
// }
//
// let p: Provider = {
//     model: Model
// }


const enum TooltipPosition {
    BOTTOM = 'bottom',
    TOP = 'top',
    RIGHT = 'right'
}

let key: (typeof TooltipPosition)[keyof (typeof TooltipPosition)] = TooltipPosition.TOP;
