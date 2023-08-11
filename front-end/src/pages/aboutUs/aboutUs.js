import React from "react";
import "./aboutUs.css";
import AboutUsLogo from "../../extras/ComicCityAboutUs.png"

const AboutUs = () => {
  return (
    <div className="aboutUs">

      <div className="aboutUsSection">
        <div className="aboutUsHeading">
          <h1>About Us</h1>
        </div>

        <div className="aboutUsContents">
          <div className="aboutUsLogo">
            <img src={AboutUsLogo} alt="AboutUsLogo" />
          </div>

          <div className="aboutUsDetails">
            <p>
            Welcome to Comic City, a platform dedicated to providing a seamless and enjoyable experience for comic enthusiasts. Our website is designed to be a hub for comic lovers, offering a wide range of comics for reading enjoyment and a platform for aspiring creators to share their own creations with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
