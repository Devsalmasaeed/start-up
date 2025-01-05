import React from 'react';
import Navbar from "../component/Navbar";
import Footer from '../component/footer';
import './About.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <main>
                <div className="about-container">
                    <div className="about-card">
                        <h2>About Us</h2>
                        <p>
                            Welcome to our organization! We are dedicated to delivering innovative
                            solutions to meet your needs. Our team thrives on creativity,
                            collaboration, and commitment to excellence.
                        </p>
                    </div>
                    <div className="about-card">
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to empower businesses and individuals by providing
                                cutting-edge solutions that enhance productivity and foster growth.
                            </p>
                            <p>
                                We believe in creating sustainable impact through technology and
                                innovation.
                            </p>
                    </div>
                    <div className="about-card">
                        <h2>Why Choose Us</h2>
                        <p>
                            With years of experience, a dedicated team, and a customer-first
                            approach, we ensure the highest level of satisfaction. Join us on this
                            journey toward success!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
