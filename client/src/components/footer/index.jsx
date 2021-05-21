import React, { Fragment } from "react";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import map from "../../assets/images/map.jpg";
import logo from "../../assets/images/logo.png";
import Link from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="row">
          <div className="col-md-3">
              <img className="logo" src={logo} alt="Badanti Service" />

            <p>
              Find a caregiver online quickly, easily and securely or offer
              yourself as a part-time or full-time caregiver
            </p>
          </div>
          <div className="col-md-3 justifyCenter">
            <h4 className="subHead">Quick Links</h4>
            <div className="links">
              <div>
                <ChevronRightOutlinedIcon />
                <a href="">Home</a>
              </div>
              <div>
                <ChevronRightOutlinedIcon />
                <a href="">I am Caregiver</a>
              </div>
              <div>
                <ChevronRightOutlinedIcon />
                <a href="">Signin</a>
              </div>
              <div>
                <ChevronRightOutlinedIcon />
                <a href="">Login</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className="subHead">Social Media</h4>
            <div className="icons d-flex">
              <FacebookIcon />
              <span class="ml-2 mr-2">
                <InstagramIcon />
              </span>
              <TwitterIcon />
            </div>
          </div>

          <div className="col-md-3">
            <div className="map">
              <img src={map} />
            </div>
          </div>
        </div>
      </section>
      <div className="copyRight">
        <p>Copyright © 2021 Badanti Service</p>
      </div>
    </Fragment>
  );
};

export default Footer;
