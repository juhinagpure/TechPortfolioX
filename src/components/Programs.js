// import React from 'react';
import "../styles/Programs.css";

// const Programs = () => {
//   return (
//     <div className="programs-section">
//       <h2>Our Programs</h2>
//       <div className="programs-grid">
//         <div className="program-card">
//           <img src="../assets/images/events.png" alt="Teztecch Events" />
//           <h3>Teztecch Events</h3>
//           <p>Exciting tech conferences, workshops, and hackathons for innovation.</p>
//         </div>
//         <div className="program-card">
//           <img src="assets/images/community-icon.png" alt="Teztecch Community" />
//           <h3>Teztecch Community</h3>
//           <p>Teztecch Community: Where innovative and tech-savvy minds connect and collaborate.</p>
//         </div>
//         <div className="program-card">
//           <img src="assets/images/shoots-icon.png" alt="Teztecch Shoots" />
//           <h3>Teztecch Shoots</h3>
//           <p>Capturing tech trends and innovations through stunning visual content.</p>
//         </div>
//         <div className="program-card">
//           <img src="assets/images/internship-icon.png" alt="Teztecch Internshala" />
//           <h3>Teztecch Internshala</h3>
//           <p>Bridging the gap between tech students and industry with meaningful internships.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Programs;

import eventsImage from "../assets/images/events.png";
import communityIcon from "../assets/images/teztecch-community.png";
import shootsIcon from "../assets/images/shoots.png";
import internshipIcon from "../assets/images/internshala.png";

const Programs = () => {
  return (
    <div className="programs-section">
      <h2>Our Programs</h2>
      <div className="programs-grid">
        <div className="program-card">
          <img src={eventsImage} alt="Teztecch Events" />
          <h3>Teztecch Events</h3>
          <p>Exciting tech conferences, workshops, and hackathons for innovation.</p>
        </div>
        <div className="program-card">
          <img src={communityIcon} alt="Teztecch Community" />
          <h3>Teztecch Community</h3>
          <p>Teztecch Community: Where innovative and tech-savvy minds connect and collaborate.</p>
        </div>
        <div className="program-card">
          <img src={shootsIcon} alt="Teztecch Shoots" />
          <h3>Teztecch Shoots</h3>
          <p>Capturing tech trends and innovations through stunning visual content.</p>
        </div>
        <div className="program-card">
          <img src={internshipIcon} alt="Teztecch Internshala" />
          <h3>Teztecch Internshala</h3>
          <p>Bridging the gap between tech students and industry with meaningful internships.</p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
