import React from 'react';
import './profileCards.css';
import picImage from "../assets/pic1.png";
import picImage2 from "../assets/pic2.png";
import picImage3 from "../assets/pic3.png";
import picImage4 from "../assets/pic4.png";

const ProfileCards = () => {
  const teamMembers = [
    { name: "Peg Legge", role: "CEO", image: picImage },
    { name: "Richard Guerra", role: "CTO", image: picImage2 },
    { name: "Alexandra Stolz", role: "Designer", image: picImage3 },
    { name: "Janet Bray", role: "Developer", image: picImage4 },
  ];

  return (
    <div className="profile-team">
      <div className="profile-container">
        {teamMembers.map((member, index) => (
          <div className="profile-card" key={index}>
            <img src={member.image} alt={member.role} className="profile-image" />
            <h2 className="profile-name">{member.name}</h2>
            <p className="profile-role">{member.role}</p>
          </div>
        ))}
      </div>
      <button className="view-team-button" onClick={() => alert("Team viewed!")}>
        View Team
      </button>
    </div>
  );
};

export default ProfileCards;
