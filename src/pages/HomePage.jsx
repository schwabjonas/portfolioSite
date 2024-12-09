import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/HomePage.css';
import Hero from '../components/Hero.jsx';
import Quote from '../components/Quote.jsx';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <Quote />
        </main>
    );
};

export default HomePage;