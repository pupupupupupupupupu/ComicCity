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
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, user, logout, loginWithPopup } = useAuth0();
  console.log(user);
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
        {["Search", "Home", "Upload", "Comics", "About Us"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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

  return (
    <div>
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

          {/* <div>Register</div> */}
          <div
            // className="bx bx-menu"
            // onClick={handleClick}
            id="menu-icon"
          >
            <div className="menu">
              <React.Fragment key={"right"}>
                <Button onClick={toggleDrawer("right", true)}>
                  <MenuIcon onClick={toggleDrawer("right", true)} />
                </Button>

                {/* theme provider inorder to display dark theme */}

                <SwipeableDrawer
                  anchor={"right"}
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                  onOpen={toggleDrawer("right", true)}
                >
                  {list("right")}
                </SwipeableDrawer>
              </React.Fragment>
              {/* <div>
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
            </div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
