function fn(a: any, b: any) {

}

fn(1, 'sda');
fn('asd', 1);


// Interface/Type/Function/Class
interface IAccount<GeneralInformation extends { age: number }, Id = string> {
    id: Id,
    name: string,
    info: GeneralInformation
}

let user: IAccount<{ age: number }, number> = {
    id: 1,
    name: 'Ihor',
    info: {
        age: 34
    }
}

let admin: IAccount<{ age: number, subject: string[] }> = {
    id: 'asdads123123',
    name: 'Lena',
    info: {
        age: 34,
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

let key:  (typeof TooltipPosition)[keyof (typeof TooltipPosition)] = TooltipPosition.TOP;
