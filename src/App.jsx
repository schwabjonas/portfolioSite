import React, { useState } from 'react';
import './assets/styles/global.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ArtPage from './pages/ArtPage.jsx';
import TestPage from './pages/TestPage.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    } else if (currentPage === 'portfolio') {
      return <PortfolioPage />;
    } else if (currentPage === 'art') {
      return <ArtPage />;
    } else if (currentPage === 'test') {
      return <TestPage />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
