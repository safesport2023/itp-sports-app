import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <header className="header">
            <div className='header-left'>
                <img className='logo' src='../assets/ITP-LOGO-FINAL_TRANSPARENT_LORES-e1639923321711.png' alt='logo' />
            </div>
            <div className='header-right'>
                <h1 className='header-content'>Making sports safe for all</h1>
            </div>
            <nav className="nav-links">

            </nav>
        </header>
    );
}

export default Header;
