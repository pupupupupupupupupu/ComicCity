import React from "react";
import "./navbar.css";
import Logo from "../extras/Comic City.png"

const Navbar = () => {
  const menu = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  const handleClick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src={Logo} alt="Logo" id="logoImage" />
          {/* <i className="bx bxs-home-smile"></i>
          <span>Logo</span> */}
        </a>

        <ul className="navbar">
          <li><a href="#">Search</a></li>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Upload</a></li>
          <li><a href="#">Comics</a></li>
          <li><a href="#">About Us</a></li>
        </ul>

        <div className="main">
          <a href="#" className="user">
            <i class="bx bxs-user"></i>Sign In
          </a>
          <a href="#">Register</a>
          <div
            className="bx bx-menu"
            onClick={handleClick}
            id="menu-icon"
          ></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;



