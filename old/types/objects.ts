type User = {
    readonly firstName: string;
    readonly  age?: number;
}

type CB = { (e: Event): void };

const user: User = {
    firstName: 'Ihor',
}
user.firstName = 'sda';
user.age = 34;

let myName: (typeof user)['firstName'] = 'Ihor';


let userMap: {
    [id: string]: User
} = {
    'asda12331asdsd': {
        firstName: 'Ihor',
    },
    'asdasdad3234232323': {
        firstName: 'Lena',
        age: 21
    }
}


/****/

// let arr: ReadonlyArray<User> = [user];
let arr:  User[]= [user];
arr[100] = user;
arr.push(user);
let u1: User = arr[50];

let tupleArr: readonly [id: number, user: User] = [1, user];
tupleArr[100] = user;
tupleArr.push(user);


let a = 'ease-in' as const;
let b: typeof a = 'asdasd';


let account =  [1, user] as const; // number | User
let person: typeof account =  [1, user];
person.push(user)


let user1 =  {
    firstName: 'Ihor',
    age: 34
} as const

let user2: typeof user1 = {
    firstName: 'Ihor',
    age: 34
}
user2.firstName = 'user2'
