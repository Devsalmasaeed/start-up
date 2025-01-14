import React from "react";
import "./Services.css";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import { motion } from "framer-motion";

const Services = () => {
    const services = [
        {
            title: "Basic",
            price: "$100 / month",
            description: "A starter plan for individuals and small teams. Includes basic tools and support.",
            features: ["Access to core features", "Community support", "Basic analytics", "Email notifications", "Standard integrations"],
        },
        {
            title: "Plus",
            price: "$250 / month",
            description: "Perfect for growing teams and organizations. Includes advanced features.",
            features: ["All Basic features", "Priority support", "Enhanced analytics", "Custom integrations", "Team collaboration tools"],
        },
        {
            title: "Pro",
            price: "$400 / month",
            description: "For large teams and enterprises requiring high-performance solutions.",
            features: ["All Plus features", "Dedicated account manager", "Advanced automation", "API access", "Unlimited team accounts"],
        },
        {
            title: "Premium",
            price: "$600 / month",
            description: "An all-in-one solution for businesses focused on efficiency and scale.",
            features: ["All Pro features", "Custom branding", "AI-powered insights", "Custom SLA agreements", "Global access and backups"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50,  duration: 1 } },
    };

    return (
        <div>
            <Navbar />
            <main>
                <div className="services-section">
                    <h3 className="services-title">Plans</h3>
                    <h1 className="services-heading">Our Services</h1>
                    <p className="services-description">
                        Explore our plans tailored to meet the needs of individuals, teams, and enterprises.
                    </p>
                    <motion.div
                        className="services-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                variants={cardVariants}
                            >
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-price">{service.price}</p>
                                <p className="service-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="service-feature">
                                            <span className="tick-icon">✔</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="service-button">Learn More</button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
