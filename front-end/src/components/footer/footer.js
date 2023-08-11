import React from "react";
import "./footer.css";
import footerLogo from "../../extras/ComicCityFooter.png";
import discord from "../../extras/Discord - Original.png";
import github from "../../extras/Github - Original.png";
import instagram from "../../extras/Instagram - Original.png";
import linkedIn from "../../extras/LinkedIn - Original.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerLogo} alt="footerLogo" id="footerLogo" />

      <div className="horizontalRule">
        <hr id="line" />
      </div>

      <div className="footerContent">
        <div className="footerLines">
          <h3>
            WE LOSE OURSELVES IN BOOKS,
            <br />
            WE FIND OURSELVES THERE, TOO
          </h3>
        </div>

        <div className="footerMiniLogos">
          <img src={instagram} alt="instagram" />
          <img src={linkedIn} alt="linkedIn" />
          <img src={github} alt=" github" />
          <img src={discord} alt="discord" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
