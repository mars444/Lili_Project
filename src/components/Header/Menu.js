import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import './Menu.scss'
const items = [
    {
        label: 'Главная',
        command:()=>{ window.location.hash="/"},
    },
    {
        label: 'О нас',
        command:()=>{ window.location.hash="/about"},
    },
    {
        label: 'Цены',
        command:()=>{ window.location.hash="/prices"},
    },
    {
        label: 'Отзывы',
        command:()=>{ window.location.hash="/reviews"},
    },
    {
        label: 'Наша команда',
        command:()=>{ window.location.hash="/team"},
    },
]


const Menu = (menuItems) => {
    return (
        <TabMenu
        model={items}>

        </TabMenu>
    );
};

export default Menu;