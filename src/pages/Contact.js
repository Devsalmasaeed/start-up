import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <h2>Contact Us</h2>
                    <p>We are here to assist you. Reach out to us with your queries and feedback.</p>
                </motion.div>

                <motion.div
                    className="contact-content"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        variants={itemVariants}
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>

                    <motion.div
                        className="map-container"
                        variants={itemVariants}
                    >
                        <iframe
                            title="Kano Nigeria Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62988.31875999498!2d8.516907289727045!3d12.002179206037526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8194ab56a3ad%3A0x9e6c6bbd187b38b3!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1695230921112!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                borderRadius: "10px",
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </motion.div>

                {submittedData && (
                    <motion.div
                        className="submitted-data"
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        style={{
                            marginTop: "20px",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "50px",
                            backgroundColor: "#f9f9f9",
                            textAlign: "left"
                        }}
                    >
                        <h3>Submitted Information</h3>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </motion.div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
