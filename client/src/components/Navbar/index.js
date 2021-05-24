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
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png"




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

  let history = useHistory();

  function logout() {
    console.log("click");
    sessionStorage.removeItem("isLoggedIn");
    history.push("");
  }

  var navBtn;
  let isLoggedIn = sessionStorage.getItem("isLoggedIn");

  console.log(isLoggedIn);

  if (isLoggedIn) {
    navBtn =
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/Profile/${sessionStorage.getItem("user_id")}`}>Profile</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={logout}>logout</a>
        </li>
      </>
  } else {
    navBtn =
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
      </>
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <nav className="navbar navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="badante 24" className="logo"/>
        </NavLink>

        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link mbNone" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post_ad">Post Ad</NavLink>
            </li>
            {/* 
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
            </li> */}
            {localStorage.removeItem("user_id")}
            {navBtn}

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
