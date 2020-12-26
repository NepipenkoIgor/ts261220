// interface UserAccount {
//     firstName: string;
//     age: number;
// }
//
// const user = UserAccount;


// const userAccount = {
//     firstName: 'Ihor',
//     age: 34
// }
//
// const user1: (typeof userAccount) = {
//     age: 34
// };

// const users = [
//     {
//         firstName: 'Ihor',
//         age: 34
//     }
// ]
//
// const admins: typeof users = [{
//     firstName: 'Ihor',
//     age: 34
// }]

// class UserAccount {
//     firstName = 'Ihor';
//     age = 34;
// }
//
//
// const user: UserAccount = {
//     firstName: 'Ihor',
//     age: 34
// }
//
// const user2: UserAccount = new UserAccount();

// interface IUser {
//     name: string;
//     salary: number;
// }
//
// const users: IUser[] = [];
//
// users.forEach((user: IUser) => {
//   console.log(user.name)
// })


let num: number = 1;
num = NaN;
num = 0b0101;

let srt: string = 'str';

let bool: boolean = true;
bool = false;

const bigInt: bigint = 4n;

const nill: null = null;
const und: undefined = undefined;


const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

const strictObj = {
    [key1]: 100,
    [key2]: 100,
    [key3]: 100,
}

const v1 = strictObj[key1];
const v2 = strictObj[key2];
const v3 = strictObj[key3];

function onlyKey1(_value: typeof key2) {

}

onlyKey1(key1);
onlyKey1(key2);


function requestHandler(_req: any, res: any) {
    return res.json();
}
