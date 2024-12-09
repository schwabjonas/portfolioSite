import React, { useState } from 'react';
import '../assets/styles/global.css';
import '../assets/styles/PortfolioPage.css';
import SideMenu from '../components/SideMenu';
import Port_Home from '../components/Port_Home.jsx';
import Port_Miscellaneous from '../components/Port_Miscellaneous.jsx';

const PortfolioPage = () => {
    const [currentSection, setCurrentSection] = useState('Overview'); // Initialize state

    const sections = [
        {
            title: 'Overview',
            items: [],
            component: <Port_Home />
        },
        {
            title: 'Front-End',
            items: [],
        },
        {
            title: 'Full-Stack',
            items: [],
        },
        {
            title: 'Miscellaneous',
            items: [],
            component: <Port_Miscellaneous />
        },
    ];

    const renderContent = () => {
        const activeSection = sections.find((section) => section.title === currentSection);

        return activeSection?.component || <Port_Home />;
    };

    return (
        <div className="portfolio-page">
            <SideMenu sections={sections} setCurrentSection={setCurrentSection} />
            <div className="adapter"></div>
            <div className="portfolio-content">{renderContent()}</div>
        </div>
    );
};

export default PortfolioPage;
