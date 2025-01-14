import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; // Importing Framer Motion
import "./Hero.css";
import Group from "../assets/Group.png";

const Hero = () => {
// Animation variants for Framer Motion
const slideInFromLeft = {
hidden: { x: "-100%", opacity: 0 },
visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const slideInFromRight = {
hidden: { x: "100%", opacity: 0 },
visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

return (
<div className="hero-container">
    {/* Animate the image */}
    <motion.div
    className="hero-image"
    variants={slideInFromRight}
    initial="hidden"
    animate="visible"
    >
    <img src={Group} alt="Empowered women trading" />
    </motion.div>

    {/* Animate the text */}
    <motion.div
    className="hero-text"
    variants={slideInFromLeft}
    initial="hidden"
    animate="visible"
    >
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
        TradeWise is a platform designed to empower housewives worldwide by
        enabling them to actively participate in online trading. Gain
        financial independence, contribute to their family, and make a
        positive societal impact!
    </p>
    <button className="hero-button">Explore</button>
    </motion.div>
</div>
);
};

export default Hero;
