"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMenu = void 0;
require("./styles.css");
$('s');
function generateMenu(list) {
    let output = '<ul>';
    for (const item of list) {
        const items = item.items;
        output += `<li><a class=${items ? 'title' : ''}>${item.title}</a>`;
        if (items) {
            output += generateMenu(items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}
exports.generateMenu = generateMenu;
