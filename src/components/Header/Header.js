import React from 'react';
import logo from 'assets/images/logo.jpg'
import './Header.scss'
import Menu from "./Menu";
const Header = () => {
    return (
        <header className='flex align-items-center justify-content-between'>
            <div className="logo header-logo">
                <img className='header-logo-img' src={logo} alt="Logo"/>
            </div>
            <Menu/>

        </header>
    );
};

export default Header;