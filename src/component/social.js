import React from "react";
import "./social.css"; 

import XMLID_24_ from "../assets/XMLID_24_.png";
import micro from "../assets/micro.png";
import air from "../assets/air.png";
import facebook from "../assets/facebook.png";
import spot from "../assets/spot.png";

const Social = () => {
return (
    <div className="social">
    <div className="section">
        <h2 className="part">PARTNERS</h2>
        <h1 className="lorem">Trading Platform</h1>
        <h3 className="ipsum">
            Enable users to sell goods they create or trade in commodities.
        </h3>
    </div>
    <div className="ggm">
        <img src={XMLID_24_} alt="Google" className="google" />
        <img src={micro} alt="Microsoft" className="microsoft" />
        <img src={air} alt="Airbnb" className="air" />
        <img src={facebook} alt="Facebook" className="facebook" />
        <img src={spot} alt="Spotify" className="spot" />
    </div>
        <button className="learn-button3" onClick={() => alert("viewed!")}>Learn More</button>
    </div>
);
};

export default Social;

