import React, { useState } from 'react';
import '../assets/styles/global.css';


const Port_Home = () => {
    return (
        <div className="work-container">
            <section className="work-section">
                <h1 className="work-header">My Work</h1>
                <p className="work-intro">
                    I’m passionate about building unique, accessible, and engaging digital experiences. Whether it’s creating elegant interfaces, developing robust backends, or just experimenting with fun projects, I enjoy every aspect of the process.
                </p>
            </section>

            <section className="work-category">
                <h2>Front-End Development</h2>
                <p>
                    I love bringing designs to life with interactive and accessible user interfaces. From crafting animations that enhance the user experience to ensuring cross-browser compatibility, I focus on making the web a delightful place to navigate.
                </p>
                <ul>
                    <li>Responsive web designs</li>
                    <li>CSS frameworks and animations</li>
                    <li>Accessible and user-friendly UIs</li>
                </ul>
            </section>

            <section className="work-category">
                <h2>Full-Stack Development</h2>
                <p>
                    I enjoy creating systems that work seamlessly from front to back. Designing scalable architectures and ensuring efficient data handling is just as rewarding as seeing it all come together on the front-end.
                </p>
                <ul>
                    <li>RESTful APIs and server-side logic</li>
                    <li>Database integration and management</li>
                    <li>End-to-end testing and performance optimization</li>
                </ul>
            </section>

            <section className="work-category">
                <h2>Miscellaneous Projects</h2>
                <p>
                    Sometimes, I just build for fun. These projects are where I explore new ideas, experiment with technologies, and simply enjoy the process of creating without constraints.
                </p>
                <ul>
                    <li>Langton's Ant and other simulations</li>
                    <li>Interactive experiments with WebGL</li>
                    <li>Creative coding and art projects</li>
                </ul>
            </section>

            <footer className="work-footer">
                <p>
                    No matter the project, I believe in crafting solutions that are as functional as they are beautiful. Let’s build something amazing together.
                </p>
            </footer>
        </div>
    );
};

export default Port_Home;