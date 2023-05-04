import React from "react";
import "./aboutUs.css";
import Navbar from "./navbar";
import Footer from "./footer";
import AboutUsLogo from "../extras/ComicCityAboutUs.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      {/* <Navbar /> */}

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
{/* 
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default AboutUs;
