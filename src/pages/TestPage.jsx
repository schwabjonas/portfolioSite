import React, { useEffect, useRef } from 'react';
import '../assets/styles/global.css';
import '../assets/styles/Animation.css';
import BaseImage from '../assets/images/base.png';
import MeImage from '../assets/images/me.png';


const TestPage = () => {
    const eyeContainer1Ref = useRef(null);
    const pupil1Ref = useRef(null);
    const eyeContainer2Ref = useRef(null);
    const pupil2Ref = useRef(null);

    let animationFrameId;

    useEffect(() => {
        const onMouseMove = (event) => {
            const updatePupilPosition = (eyeContainer, pupil) => {
                if (eyeContainer && pupil) {
                    const containerRect = eyeContainer.getBoundingClientRect();
                    const containerCenterX = containerRect.left + containerRect.width / 2;
                    const containerCenterY = containerRect.top + containerRect.height / 2;

                    const mouseX = event.clientX;
                    const mouseY = event.clientY;

                    const angle = Math.atan2(mouseY - containerCenterY, mouseX - containerCenterX);

                    const maxX = (containerRect.width - pupil.offsetWidth) / 2;
                    const maxY = (containerRect.height - pupil.offsetHeight) / 2;

                    const pupilX = Math.cos(angle) * maxX;
                    const pupilY = Math.sin(angle) * maxY;

                    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
                }
            };
            animationFrameId = requestAnimationFrame(() => {
                updatePupilPosition(eyeContainer1Ref.current, pupil1Ref.current);
                updatePupilPosition(eyeContainer2Ref.current, pupil2Ref.current);
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div id="content">
            <img src={MeImage} alt="Character Base" className="me-image" />
            <div className="animation">
                <div id="eye-container1" ref={eyeContainer1Ref}>
                    <div id="eye1">
                        <div id="pupil1" ref={pupil1Ref}></div>
                    </div>
                </div>

                <div id="eye-container2" ref={eyeContainer2Ref}>
                    <div id="eye2">
                        <div id="pupil2" ref={pupil2Ref}></div>
                    </div>
                </div>

                <img src={BaseImage} alt="Character Base" className="base-image" />

            </div>
        </div>

    );
};

export default TestPage;
