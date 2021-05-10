import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import AccountProfile from "../../components/account/AccountProfile";
import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "../../components/footer/index.jsx";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem, { menuItemClasses } from "@material-ui/core/MenuItem";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from 'sweetalert2';
import AdCom from './ads'


const Profile = () => {

  return (
    <>
      <Helmet>
        <title>Badanti | Profile</title>
      </Helmet>
      <Navbar fixed="top" />
      <div className="wrapper">
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            py: 3,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12}>
                <AccountProfile />
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <div className="row">
                  <AdCom/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
