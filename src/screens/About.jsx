import React from "react";
import "../css/about.css";
import Faq from "../screens/FAQ";

export default function AboutUs() {
  return (
    <div className="about-us">
        <h2>About Us</h2>
      <div className="section mission">
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            At संपत्ति, our mission is to empower individuals
            and communities with the knowledge and tools they need to achieve financial
            independence, make informed financial decisions, and secure their financial future.
          </p>
        </div>
        <div className="image">
          <img src="mission.jpg" alt="Mission" style={{width:"300px", borderRadius:"15px"}}/>
        </div>
      </div>
      <div className="section who-we-are">
        <div className="image">
          <img src="whoarewe.jpg" alt="Who We Are" style={{width:"300px", borderRadius:"15px"}}/>
        </div>
        <div className="text">
          <h2>Who We Are</h2>
          <p>
            We are a team of passionate individuals who are dedicated to promoting
            financial literacy and education. With backgrounds in finance, economics,
            education, and technology, we come together to create a platform that makes
            financial knowledge accessible to everyone.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Faq />
    </div>
  );
}
