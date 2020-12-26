let d: 1 | 2 | 3 | 4 | 5;
d = 10;
d = 1;
d = 5;

let color: 'red' | 'orange' | 'green';

color = 'yellow';
color = 'red';

type Direction = 'in' | 'out';
type AnimationType = 'ease'

interface IOptions {
    delay: number;
    easing: `${AnimationType}-${Direction}`;
}


function animate(_options: IOptions) {
}


animate({delay: 1000, easing: 'ease-out'})


/*****/

interface IFact {
    factId: number;
    userFrom: string;
    userTo: true
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => {  // 'factId' | 'userFrom' | 'userTo'
    return 'factId'
}

dataList.map((item: { action: string, data: IFact }) => {
        if (item.data[uniqueValue()]) {

        }
        return item;
    }
)


const id: IFact[ keyof IFact] = true; // number |  string | true
