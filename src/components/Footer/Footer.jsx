import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/* <img src="./logo2.png" alt="" width={120} /> */}
          <span className="secondaryText">
          <h4>Prasad</h4>
        we aim to transform shopping into a personalized experience by connecting you with dedicated shopping partners.<br />
         Our male and female experts understand your unique style and preferences, ensuring you find exactly what you need. <br />
         Together, we make shopping enjoyable, efficient, and tailored just for you!
          </span>
        </div>

        <div className="flexColStart f-right">
        </div>
      </div>
    </div>
  );
};

export default Footer;
