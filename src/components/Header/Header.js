import React, {useCallback} from 'react';
import logo from 'assets/images/logo.svg'
import './Header.scss'
import Menu from "./Menu/Menu";
import { Button } from 'primereact/button';
import MobileMenu from "./MobileMenu/MobileMenu";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Header = React.memo(() => {
    console.log('renderrr')
    const [visibleMenu, setVisibleMenu] = useState(false);
    const items = [
        {
            label: 'Главная',
            command:()=>{
                window.location.hash="/"
                setVisibleMenu(false)
            },
        },
        {
            label: 'О нас',
            command:()=>{
                window.location.hash="/about"
                setVisibleMenu(false)
            },
        },
        {
            label: 'Цены',
            command:()=>{
                window.location.hash="/prices"
                setVisibleMenu(false)
            },
        },
        {
            label: 'Отзывы',
            command:()=>{
                window.location.hash="/reviews"
                setVisibleMenu(false)
            },
        },
        {
            label: 'Наша команда',
            command:()=>{
                window.location.hash="/team"
                setVisibleMenu(false)
            },
        },
    ]
    const openMobileMenu = () => {
            setVisibleMenu(!visibleMenu)
    }
    return (
        <header className="page-header  header ">
            <MobileMenu mobileMenuItems={items} setVisibleMenu={openMobileMenu} visibleMenu={visibleMenu}/>
            <div className="header__container">
                <a href="/" className="header__logo">
                    <img src={logo} width="134" height="50" alt="Центр дентальной травматологии"></img>
                </a>

                <span className="header__title">Центр дентальной травматологии</span>

                <a href="tel:+79251415930" className="header__btn">+7 (925) 141-59-30</a>
                <Menu menuItems={items} />
                <Button icon="pi pi-align-right" onClick={openMobileMenu} />
            </div>

        </header>
    );
});

export default Header;