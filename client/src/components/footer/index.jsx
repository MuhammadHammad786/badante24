import React, { Fragment } from "react";
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <Fragment>
       <section className="footer">
      <div className="row">
        <div className="col-sm-3">
          <h2 className="logo">Badanti Service</h2>
          <p>
            Find a caregiver online quickly, easily and securely or offer
            yourself as a part-time or full-time caregiver
          </p>
        </div>
        <div className="col-sm-3 justifyCenter">
          <h4 className="subHead">Quick Links</h4>
          <div className="links">
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Home
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                I am Caregiver
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Signin
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3 justifyCenter">
          <h4 className="subHead">Other Links</h4>
          <div className="links">
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Home
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                I am Caregiver
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Signin
              </a>
            </div>
            <div>
              <ChevronRightOutlinedIcon/>
              <a href="">
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
        <h4 className="subHead">Social Media</h4>
        <div className="icons d-flex">
        <FacebookIcon/>
        <span class="ml-2 mr-2">
        <InstagramIcon/>
        </span>
        <TwitterIcon/>
        </div>
        </div>
      </div>
      
    </section>
    <div className="copyRight">
      <p>
      Copyright © 2021 Badanti Service
      </p>
    </div>
    </Fragment>

    
  );
};

export default Footer;
