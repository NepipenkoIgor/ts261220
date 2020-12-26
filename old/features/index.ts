/** let/const */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const period = 50;
const baseUrl = 'http://localhost'

/**object*/
const firstName = 'Ihor';
const account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/**spread */
const person = {...account};
const dates = [...[1, 2, 3]]

/* destructoring*/
const {firstName: username} = person;
const [firstDate] = dates;

/* for of*/
for (const date of dates) {
    console.log(date);
}

/* arrow*/
const sum = (a: number, b: number) => a + b;

/* class*/
class Point {
    public x = 1;

    public getX() {
        return this.x;
    }
}

/*template str*/

function userMessage([start, end]: TemplateStringsArray, {firstName}: typeof account): string {
    return `${start}${firstName}${end}`;
}

console.log(userMessage`Good Day, ${person} !!`)

/** ?.  and ??*/
const user: any = {};
const x = user?.info?.x;

const admin: any = null;
const p = admin ?? user;

const isInArr = dates.includes(1);
