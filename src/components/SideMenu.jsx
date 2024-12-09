import React, { useState } from 'react';
import '../assets/styles/SideMenu.css';

const SideMenu = ({ sections, setCurrentSection }) => {
    const [openSections, setOpenSections] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleSection = (title) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <aside className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="collapse-button" onClick={toggleCollapse}>
                {isCollapsed ? '≡' : '≡'}
            </button>
            {!isCollapsed && (
                <ul className="menu-sections">
                    {sections.map((section) => (
                        <li key={section.title} className="menu-section">
                            <button
                                className="section-title"
                                onClick={() => {
                                    toggleSection(section.title);
                                    setCurrentSection(section.title); // Update current section
                                }}
                            >
                                {section.title}
                            </button>
                            <ul className={`submenu ${openSections[section.title] ? 'open' : ''}`}>
                                {section.items.map((item) => (
                                    <li key={item.name} className="submenu-item">
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};

export default SideMenu;
