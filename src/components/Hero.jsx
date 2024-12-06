import React from 'react';
import '../assets/styles/HomePage.css';
import profileImg from '../assets/images/profile.jpg';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content">
                <img id="profile-img" src={profileImg} alt="Profile Picture" />
                <h2>Hi, I'm Jonas Schwab</h2>
                <p>A developer passionate about crafting great web experiences.</p>
            </div>
        </section>
    );
};

export default Hero;
