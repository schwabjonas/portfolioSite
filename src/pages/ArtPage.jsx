import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/ArtPage.css';
import '../assets/styles/global.css';
import image1 from '../assets/images/art/image1-gallery.jpg';
import image2 from '../assets/images/art/image2-gallery.jpg';
import image3 from '../assets/images/art/image3-gallery.jpg';
import image4 from '../assets/images/art/image4-gallery.jpg';
import image5 from '../assets/images/art/image5-gallery.jpg';
import image6 from '../assets/images/art/image6-gallery.jpg';
import image7 from '../assets/images/art/image7-gallery.jpg';
import image8 from '../assets/images/art/image8-gallery.jpg';
import image9 from '../assets/images/art/image9-gallery.jpg';
import image10 from '../assets/images/art/image10-gallery.jpg';
import image11 from '../assets/images/art/image11-gallery.jpg';
import image12 from '../assets/images/art/image12-gallery.jpg';

import PauseIcon from '../assets/icons/pause-fill.svg';
import PlayIcon from '../assets/icons/play-fill.svg';
import NextIcon from '../assets/icons/caret-right-fill.svg';
import PreviousIcon from '../assets/icons/caret-left-fill.svg';
import CloseIcon from '../assets/icons/x.svg';

const ArtPage = () => {
    const [overlayActive, setOverlayActive] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const slideshowInterval = useRef(null);

    const images = [
        image1, image2, image3, image4, image5,
        image6, image7, image8, image9, image10,
        image11, image12
    ];

    const showImage = (image) => {
        setOverlayActive(true);
        setCurrentImage(image);
    };

    const closeOverlay = () => {
        setOverlayActive(false);
        setCurrentImage(null);
        pauseSlideshow();
    };

    const nextImage = () => {
        if (!currentImage) return;
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[nextIndex]);
    };

    const previousImage = () => {
        if (!currentImage) return;
        const currentIndex = images.indexOf(currentImage);
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentImage(images[previousIndex]);
    };

    const startSlideshow = () => {
        // If there's no current image selected, start from the first image
        if (!currentImage) {
            setCurrentImage(images[0]);
        }
        setIsPlaying(true);
    };

    const pauseSlideshow = () => {
        setIsPlaying(false);
    };

    const toggleSlideshow = () => {
        if (isPlaying) {
            pauseSlideshow();
        } else {
            startSlideshow();
        }
    };

    // Handle keyboard navigation and slideshow toggling
    useEffect(() => {
        const handleKeydown = (event) => {
            if (!overlayActive) return;

            switch (event.key) {
                case "Escape":
                    closeOverlay();
                    break;
                case "ArrowRight":
                    if (!isPlaying) nextImage();
                    break;
                case "ArrowLeft":
                    if (!isPlaying) previousImage();
                    break;
                case " ":
                    event.preventDefault();
                    toggleSlideshow();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [overlayActive, isPlaying, currentImage]);

    // Slideshow effect
    useEffect(() => {
        // Clear any existing interval when isPlaying changes
        if (slideshowInterval.current) {
            clearInterval(slideshowInterval.current);
        }

        if (isPlaying && overlayActive && currentImage) {
            slideshowInterval.current = setInterval(() => {
                nextImage();
            }, 2000); // Set a reasonable interval time
        }

        return () => {
            if (slideshowInterval.current) {
                clearInterval(slideshowInterval.current);
                slideshowInterval.current = null;
            }
        };
    }, [isPlaying, overlayActive, currentImage]);

    return (
        <main className="art-page">
            <div id="header" className="art-header">
                <div className="header-content">
                    <h1>Art Portfolio</h1>
                    <h3>By Jonas Schwab</h3>
                    <p>
                        I am re-immersing myself in art, post-high school, as a hobby and a way to stay mentally healthy.
                        As a kid, I was a die-hard realism artist, and as an adult, I have expanded into the world of
                        abstract colorful art in whatever mediums I can get my hands on.
                    </p>
                    <p>
                        Instagram: <a href="https://www.instagram.com/plinthnabis/" id="instagram">@plinthnabis</a>
                    </p>
                </div>
            </div>
            <section className="gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Painting ${index + 1}`}
                        className="gallery-image"
                        onClick={() => showImage(image)}
                    />
                ))}
            </section>

            {overlayActive && (
                <div className={`overlay ${isPlaying ? "playing" : ""}`}>
                    <button id="previous" onClick={previousImage}>
                        <img src={PreviousIcon} alt="Previous" />
                    </button>
                    <img src={currentImage} alt="Painting" className="overlay-image" />
                    <button id="close" onClick={closeOverlay}>
                        <img src={CloseIcon} alt="Close" />
                    </button>
                    <button id="next" onClick={nextImage}>
                        <img src={NextIcon} alt="Next" />
                    </button>
                    <button
                        id={isPlaying ? "pause" : "play"}
                        onClick={isPlaying ? pauseSlideshow : startSlideshow}
                        className="center-button"
                    >
                        <img
                            src={isPlaying ? PauseIcon : PlayIcon}
                            alt={isPlaying ? "Pause slideshow" : "Play slideshow"}
                        />
                    </button>
                </div>
            )}
        </main>
    );
};

export default ArtPage;
