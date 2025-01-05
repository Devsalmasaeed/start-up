import React from 'react';
import teamImage from "../assets/team.png";
import './Team.css';

const Team = () => {
    return (
        <div className='team-section'>
            <div className='team-image-container'>
                <img src={teamImage} alt="team" className='team-image' />
            </div>
            <div className='team-content'>
                <h1 className='team-title'>Empowering Women in Global Trade</h1>
                <h3 className='team-description'>
                    Our platform enables women to connect with opportunities in online trading, creating a pathway for financial independence and societal impact. Join us in fostering a global community of innovative and empowered entrepreneurs.
                </h3>
            <button className='team-button' onClick={() => alert('viewed!')}>Learn More</button>
            </div>
        </div>
    );
};

export default Team;
