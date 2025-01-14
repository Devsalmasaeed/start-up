import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./works.css";
import port1Image from "../assets/port1.png";
import port2Image from "../assets/port2.png";
import port3Image from "../assets/port3.png";
import port4Image from "../assets/port4.png";
import port5Image from "../assets/port5.png";
import port6Image from "../assets/port6.png";
import port7Image from "../assets/port7.png";
import port8Image from "../assets/port8.png";

const Works = () => {
// Define animation variants
const container = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.2,
    },
},
};

const item = {
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

return (
<section className="portfolio-section">
    <header className="portfolio-header">
    <span className="works-title">Our Work</span>
    <h1 className="portfolio-title">Creative Portfolio</h1>
    <p className="portfolio-description">
        Explore our diverse projects showcasing innovation, design, and impactful solutions for online trading.
    </p>
    </header>
    {/* Animated Grid */}
    <motion.div
    className="portfolio-grid"
    variants={container}
    initial="hidden"
    animate="visible"
    >
    {[port1Image, port2Image, port3Image, port4Image, port5Image, port6Image, port7Image, port8Image].map(
        (image, index) => (
        <motion.img
            key={index}
            src={image}
            alt={`Portfolio ${index + 1}`}
            className="portfolio-image"
            variants={item}
        />
        )
    )}
    </motion.div>
    <button className="portfolio-button">Learn More</button>
</section>
);
};

export default Works;
