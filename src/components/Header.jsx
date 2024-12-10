import React, { useState } from 'react';
import '../assets/styles/global.css';
import logo from '../assets/images/logo.png';
import chatIcon from '../assets/icons/chat-icon.svg';


const Header = ({ currentPage, setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
        closeMenu();
    };

    return (
        <header className={`header ${menuOpen ? 'open' : ''}`}>
            <aside className="logo-container">
                <img src={logo} alt="Website Logo" className="logo" />
            </aside>
            <div className="interactive-header">
                <div className="menu-header">
                    <button className="menu-button" onClick={toggleMenu}>
                        <span className="menu-label">MENU</span>
                    </button>

                    <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
                        <li className={currentPage === 'home' ? 'active' : ''}><button onClick={() => handleNavigation('home')}>HOME</button></li>
                        <li className={currentPage === 'portfolio' ? 'active' : ''}><button onClick={() => handleNavigation('portfolio')}>PORTFOLIO</button></li>
                        <li className={currentPage === 'art' ? 'active' : ''}><button onClick={() => handleNavigation('art')}>ART</button></li>
                        {/*<li className={currentPage === 'test' ? 'active' : ''}><button onClick={() => handleNavigation('test')}>Test</button></li>*/}
                    </ul>

                </div>
                <div className={`chat-button ${menuOpen ? 'hidden' : ''}`}>
                    <a href="#hire" className="hire-me"><img src={chatIcon} alt="Chat Icon" className="chat-icon" />HIRE ME</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
