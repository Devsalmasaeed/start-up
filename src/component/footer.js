import React from 'react';
import './footer.css'; 
import Face from "../assets/f.png";
import Insta from "../assets/ig.png";
import Twit from "../assets/twit.png";
import Phonenix from "../assets/pp.png";
import Tik from "../assets/tik.png";
import What from "../assets/whatsap.png";
import You from "../assets/Group 39.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <img src={Face} alt="Facebook" className="icon" />
                <img src={Insta} alt="Instagram" className="icon" />
                <img src={Twit} alt="Twitter" className="icon" />
                <img src={Phonenix} alt="Phoenix" className="icon" />
                <img src={Tik} alt="TikTok" className="icon" />
                <img src={What} alt="WhatsApp" className="icon" />
                <img src={You} alt="YouTube" className="icon" />
            </div>
            <p className="copyright">&copy; Start, 2022. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
