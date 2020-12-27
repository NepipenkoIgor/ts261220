import './styles.css';
import { IListEl } from './data';

$('s')

export function generateMenu(list: IListEl[]): string {
    let output: string = '<ul>';
    for (const item of list) {
        const items: IListEl[] | undefined = item.items;
        output += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            output += generateMenu(items);
        }
        output += '</li>'
    }
    output += '</ul>'
    return output;
}
