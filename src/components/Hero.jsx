import React from 'react';
import '../assets/styles/global.css';
import '../assets/styles/HomePage.css';
import Animation from '../pages/TestPage.jsx';

import profileImg from '../assets/images/profile.jpg';
import gitIcon from '../assets/icons/github.svg';
import linkIcon from '../assets/icons/linkedin.svg';
import instaIcon from '../assets/icons/instagram.svg';


const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-content">
                {/*<img id="profile-img" src={profileImg} alt="Profile Picture" / >*/}
                <Animation />
                <h2>Hi, I'm Jonas Schwab</h2>
                <p>A developer passionate about crafting great web experiences.</p>
                <a
                    href="https://github.com/schwabjonas"
                    id="github"
                >
                    <img src={gitIcon} alt="Git Icon" className="git-icon" />
                </a>
                <a
                    href="https://www.instagram.com/plinthnabis/"
                    id="instagram"
                >
                    <img src={instaIcon} alt="Insta Icon" className="insta-icon" />
                </a>
                <a
                    href="www.linkedin.com/in/jonas-georg-schwab"
                    id="linkedin"
                >
                    <img src={linkIcon} alt="Link Icon" className="link-icon" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
