let d: 1 | 2 | 3 | 4 | 5;
d = 10;
d = 1;
d = 5;

let color: 'red' | 'orange' | 'green';

color = 'yellow';
color = 'red';

type Direction = 'in' | 'out';
type AnimationType = 'ease'

// interface IOptions {
//     delay: number;
//     easing: `${AnimationType}-${Direction}`;
// }

enum AnimationEnum {
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
    EASE = EASE_OUT
}


interface IOptions {
    delay: number;
    easing: AnimationEnum
}

function animate(_options: IOptions) {
}


animate({delay: 1000, easing: AnimationEnum.EASE_IN})


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

/****/


export const enum TooltipPosition {
    BOTTOM = 'bottom',
    TOP = 'top',
    RIGHT = 'right'
}

function show(position: TooltipPosition): void {
    switch (position) {
        case TooltipPosition.BOTTOM : {
        }
    }
}


show(TooltipPosition.TOP);
