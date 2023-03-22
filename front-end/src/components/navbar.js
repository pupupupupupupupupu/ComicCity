// import React from "react";
import "./navbar.css";
import Logo from "../extras/Comic City.png";

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";



const Navbar = () => {
  // const menu = document.getElementById("menu-icon");
  // const navbar = document.querySelector(".navbar");

  // const handleClick = () => {
  //   menu.classList.toggle("bx-x");
  //   navbar.classList.toggle("open");
  // };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Upload", "Comics", "About Us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sign In", "Register"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

<<<<<<< HEAD
  return (
    <div className="mainNavbar">
=======
  return (    
    <div>

>>>>>>> cf3859b2968f92034f405f5d65bde90e664cb428
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
          <li>
            <div className="active">Home</div>
          </li>
          <li>
            <div>Upload</div>
          </li>
          <li>
            <div>Comics</div>
          </li>
          <li>
            <div>About Us</div>
          </li>
        </ul>

        <div className="main">
          <div className="user">
            <i class="bx bxs-user"></i>Sign In
          </div>
          <div>Register</div>
          <div
            // className="bx bx-menu"
            // onClick={handleClick}
            id="menu-icon"
          >
            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
