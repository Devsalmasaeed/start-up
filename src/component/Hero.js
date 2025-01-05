import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css"; 
import Group from "../assets/Group.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-image">
        <img src={Group} alt="Empowered women trading" />
        </div>
            <div className="hero-text">
                <h1 className="hero-title">Welcome to TradeWise</h1>
                <h2 className="hero-typewriter">
        <Typewriter
            words={[
                "Empowering Housewives to Trade Globally",
                "Learn. Trade. Succeed.",
                "Achieve Financial Independence Today!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        </h2>
        <p className="hero-description">
            TradeWise is a platform designed to empower housewives worldwide by enabling them to actively participate in online trading. Gain financial independence, contribute to their family, and make a positive societal impact!
        </p>
        </div>
            
        
        <button className="hero-button">Explore</button>
        
    </div>
);
};

export default Hero;
