import React from 'react';
import mailImage from "../assets/mail.png"; 
import './TeamTwo.css'

const TeamTwo = () => {
    return (
        <div className='team-two-container'>
            <div className='team-two-image'>
                <img src={mailImage} alt="Team Collaboration" className='team-image-two' />
            </div>
            <div className='team-two-text'>
                <h1 className='team-two-title'>Empowering Women Globally</h1>
                <p className='team-two-description'>
                    Our platform offers women around the world the opportunity to thrive in online trading, 
                    fostering creativity, independence, and financial growth. Together, we create a supportive community 
                    that inspires transformation and success.
                </p>
            <button className='team-two-button' onClick={() => alert('viewed!')}>Learn More</button>
            </div>
            
        </div>
    );
};

export default TeamTwo;
