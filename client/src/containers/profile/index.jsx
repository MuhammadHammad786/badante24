import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import AccountProfile from '../../components/account/AccountProfile';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';



const Profile = () => {
  const params = useParams();
  const user_id = params.user_id;
  console.log(user_id);
  
  // ReceivedData
  const [proAd, setproAd] = useState([]);
  useEffect(async () => {
      const result = await axios.get(`http://localhost:4000/profile/${user_id}`);
      setproAd(result.data);
  },[]);
  return (
    <>

        <Helmet>
          <title>Badanti | Profile</title>
        </Helmet>
        <Navbar fixed="top" />
        <div className="wrapper">
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                <AccountProfile />
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
      <div className="row">
        {
          proAd.map(Ad => (
            <div className="col-sm-4">
              <Link to={`/ad_detail/${Ad._id}`} key={Ad._id}>
                <div className="AdBox mt-0">
                  <div className="AdImg">
                    <img src={ Ad.user_pic } alt="" />
                  </div>
                  <div className="AdDesc">
                    <p className="bold mb-0 ml-1">
                      { Ad.name }
                  </p>
                    <p className="mb-0 loc">
                      <PersonPinCircleOutlinedIcon />
                      { Ad.country }
                  </p>
                  </div>
                  <IconButton className="iconBtn">
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </Link>
            </div>



          ))
        }
      </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
    
        </div>
        <Footer />
    </>
  )
}

export default Profile;

