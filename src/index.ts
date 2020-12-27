interface IUser {
    name: string;
    surname: string;
}

function getFullName(this: IUser) {
    return `${this.name} ${this.surname}`;
}


let account = {
    name: 'Ihor',
    surname: 'Nepipenko',
    getFullName
}

account.getFullName();
