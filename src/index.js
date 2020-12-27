"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./menu");
const data_1 = require("./menu/data");
$('.menu')
    .html(menu_1.generateMenu(data_1.list))
    .on('click', (e) => {
    const el = e.target;
    if (!el.classList.contains('title')) {
        return;
    }
    const parentLi = el.parentElement;
    parentLi.classList.toggle('menu-open');
});
// const menuNav: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
// menuNav.innerHTML = generateMenu(list);
// menuNav.addEventListener('click', (e: MouseEvent) => {
//     const el: HTMLElement = e.target as HTMLElement;
//     if (!el.classList.contains('title')) {
//         return;
//     }
//     const parentLi: HTMLLIElement = el.parentElement as HTMLLIElement;
//     parentLi.classList.toggle('menu-open')
// })
