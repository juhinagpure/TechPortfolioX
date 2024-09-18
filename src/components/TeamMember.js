import React from 'react';
import '../styles/TeamMember.css';

const TeamMember = ({ name, title, image }) => {
    return (
        <div className="team-member">
            <img src={image} alt={name} className="team-member-image" />
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    );
};

export default TeamMember;
