import React, { useState } from 'react';
import '../assets/styles/HomePage.css';
import logo from '../assets/images/logo.png';
import chatIcon from '../assets/icons/chat-icon.svg';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Website Logo" className="logo" />
            </div>
            <div className="interactive-header">
                <button className="menu-button" onClick={toggleMenu}>
                    <span className="menu-icon">❘</span> <span className="menu-label">MENU</span>
                </button>
                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul className="menu-list">
                        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                        <li><a href="#art" onClick={closeMenu}>Art</a></li>
                        <li><a href="#github" onClick={closeMenu}>GitHub</a></li>
                    </ul>
                </nav>
                <div className="chat-button">
                    <img src={chatIcon} alt="Chat Icon" className="chat-icon" />
                    <a href="#hire" className="hire-me">HIRE ME</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
