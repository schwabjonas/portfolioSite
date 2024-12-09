import React from 'react';
import '../assets/styles/global.css';
import "../assets/styles/Port_Miscellaneous.css";

const Port_Miscellaneous = () => {
    return (
        <section id="Miscelleneous">
            <h1>Miscelleneous Projects</h1>
            <h2>Automata Project</h2>
            <section className="readme-content">
                <h2>Features</h2>
                <ul>
                    <li>Langton's Ant on square and hexagonal grids.</li>
                    <li>Conway's Game of Life.</li>
                    <li>Interactive command-line options for customization.</li>
                </ul>
                <h2>Usage Instructions</h2>
                <ol>
                    <li>Compile the program: <code>javac Machina.java</code></li>
                    <li>Run the program: <code>java Machina -h RMUN</code></li>
                </ol>
                <h2>Test Cases</h2>
                <ul>
                    <li>Hexagonal Ant with rotation string: <code>java Machina -h RMUN</code></li>
                    <li>Square Ant: <code>java Machina -r</code></li>
                    <li>Game of Life: <code>java Machina -l</code></li>
                </ul>
                <h2>Resources</h2>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Langton%27s_ant" target="_blank" rel="noopener noreferrer">
                            Langton's Ant on Wikipedia
                        </a>
                    </li>
                    <li>
                        <a href="https://www.redblobgames.com/grids/hexagons/" target="_blank" rel="noopener noreferrer">
                            Hexagonal Grids
                        </a>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default Port_Miscellaneous;
