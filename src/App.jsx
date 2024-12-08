import React, { useState } from 'react';
import './assets/styles/global.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Quote from './components/Quote.jsx';
import Footer from './components/Footer.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import HomePage from './pages/HomePage.jsx';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    } else if (currentPage === 'portfolio') {
      return <PortfolioPage />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
