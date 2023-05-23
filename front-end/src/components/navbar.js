import "./navbar.css";
import Logo from "../extras/Comic City.png";
import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, loginWithPopup } = useAuth0();
  console.log(user);
  const handleClick = () => {
    if (user) {
      window.open("/upload");
    } else {
      loginWithPopup().then(() => {
        navigate("/upload", { replace: true });
      });
    }
  };

  return (
    <div className="navBody">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" id="logoImage" />
          {/* <i className="bx bxs-home-smile"></i>
          <span>Logo</span> */}
        </div>
        <ul className="navbar">
          <li>
            <div>Search</div>
          </li>
          <Link to="/">
            <li>
              <div className="active">Home</div>
            </li>
          </Link>
          <Link>
            <li onClick={handleClick}>
              <div>Upload</div>
            </li>
          </Link>
          <Link to="/comics">
            <li>
              <div>Comics</div>
            </li>
          </Link>
          <Link to="/aboutus">
            <li>
              <div>About Us</div>
            </li>
          </Link>
        </ul>

        <div className="main">
          <div className="user" onClick={() => loginWithPopup()}>
            <i className="bx bxs-user"></i>
            {user ? user.given_name : "Sign in"}
            {/* <i class="bx bxs-user"></i>Sign In */}
          </div>

          <div
            className="register"
            onClick={() => {
              user ? logout() : loginWithPopup();
            }}
          >
            {user ? "Logout" : "Register"}
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
