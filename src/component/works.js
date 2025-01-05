import React from 'react';
import './works.css'; 
import port1Image from "../assets/port1.png";
import port2Image from "../assets/port2.png";
import port3Image from "../assets/port3.png";
import port4Image from "../assets/port4.png";
import port5Image from "../assets/port5.png";
import port6Image from "../assets/port6.png";
import port7Image from "../assets/port7.png";
import port8Image from "../assets/port8.png";

const Works = () => {
    return (
        <section className="portfolio-section">
            <header className="portfolio-header">
                <span className="works-title">Our Work</span>
                <h1 className="portfolio-title">Creative Portfolio</h1>
                <p className="portfolio-description">
                    Explore our diverse projects showcasing innovation, design, and impactful solutions for online trading.
                </p>
            </header>
            <div className="portfolio-grid">
                <img src={port1Image} alt="Portfolio 1" className="portfolio-image" />
                <img src={port2Image} alt="Portfolio 2" className="portfolio-image" />
                <img src={port3Image} alt="Portfolio 3" className="portfolio-image" />
                <img src={port4Image} alt="Portfolio 4" className="portfolio-image" />
                <img src={port5Image} alt="Portfolio 5" className="portfolio-image" />
                <img src={port6Image} alt="Portfolio 6" className="portfolio-image" />
                <img src={port7Image} alt="Portfolio 7" className="portfolio-image" />
                <img src={port8Image} alt="Portfolio 8" className="portfolio-image" />
            </div>
            <button className='portfolio-button' >Learn More</button>
        </section>
    );
};

export default Works;
