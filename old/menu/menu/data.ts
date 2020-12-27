export interface IListEl {
    title: string;
    items?: IListEl[];
}

export const list: IListEl[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'},
                ],
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {
                        title: 'Ящерицы', items: [
                            {title: 'Варан'},
                            {title: 'Обычная'},
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'},
                ],
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'},
                ],
            },
        ],
    },
];
