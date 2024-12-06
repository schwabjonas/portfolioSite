import React from 'react';
import './assets/styles/global.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Quote from './components/Quote.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Quote />
      <Footer />
    </div>
  );
};

export default App;
