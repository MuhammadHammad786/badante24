import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from "react-router-dom";

import TitlebarGridList from '../Card/index.jsx';
import { useAuth0 } from '@auth0/auth0-react';



const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Navbar(props) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <React.Fragment>
      <CssBaseline />

      <nav className="navbar navbar-light">
        <NavLink className="navbar-brand" to="/"> <b>Badanti Service</b> </NavLink>

        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink className="nav-link mbNone" to="/">Home</NavLink>                 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/post_ad">Post Ad</NavLink>
            </li>
            {isAuthenticated && (
            <li className="nav-item">
                <NavLink className="nav-link" to={`/Profile/${sessionStorage.getItem("user_id")}`}>Profile</NavLink>
            </li>
            )}
            <li className="nav-item">
                {!isAuthenticated && (
                <a className="nav-link" onClick={() => loginWithRedirect()}>
                  Log In
                </a>

                )}
                {isAuthenticated && (
                  <a className="nav-link" onClick={() => logout()}>
                  Log Out
                </a>

                )}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adminPanel">Admin Panel</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Navbar;
