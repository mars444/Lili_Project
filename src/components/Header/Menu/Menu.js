import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import './Menu.scss'



const Menu = ({menuItems}) => {
    return (
        <TabMenu
        model={menuItems}>

        </TabMenu>
    );
};

export default Menu;