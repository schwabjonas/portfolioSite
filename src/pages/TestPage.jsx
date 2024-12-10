import React, { useState } from 'react';
import '../assets/styles/global.css';
import '../assets/styles/Animation.css';
import BaseImage from '../assets/images/base.png';
import PupilImage from '../assets/images/eyes.png';




const TestPage = () => {
    const [pupilStyle, setPupilStyle] = useState({ left: '50%', top: '50%' });

    const handleMouseMove = (event) => {
        const container = event.currentTarget.getBoundingClientRect();
        const centerX = container.left + container.width / 2;
        const centerY = container.top + container.height / 2;
        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;
        const maxDistance = 15;

        const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
        const scale = Math.min(maxDistance / distance, 1);

        setPupilStyle({
            left: `${50 + offsetX * scale}%`,
            top: `${50 + offsetY * scale}%`,
        });

    };

    return (
        <div className="animation">
            <div
                className="eye-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setPupilStyle({ left: '50%', top: '50%' })}
            >
                <img src={BaseImage} alt="Character Base" className="base-image" />
                <img
                    src={PupilImage}
                    alt="Pupil"
                    className="pupil"
                    style={pupilStyle}
                />
            </div>
        </div>
    );
};

export default TestPage;