import "../../assets/css/App.css";
import "../../assets/css/ad_detail.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import React, { Fragment, useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { getAd } from "../../api";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { CallReceived } from "@material-ui/icons";


function Ad_detail() {

    const params = useParams();
    const id = params.id;
    
    // ReceivedData
    const [Ad, setAd] = useState([]);
    useEffect(async () => {
        const result = await axios.get(`http://localhost:4000/view_ad/${id}`);
        setAd(result.data);
    },[]);

  return (
    <Fragment>
      <Navbar fixed="top" />
        <section className="ad_detail">
            <div className="row">
                <div className="col-sm-8">
                    <div className="outBox mt-3">
                        <div className="ad_img">
                            <img src={ Ad.user_pic } alt=""/>
                        </div>
                        <h4 className="mt-3">
                            {Ad.name}
                        </h4>
                        <p className="">
                        {Ad.service_desc}
                        </p>
                    
                    </div>
                    <div className="outBox mt-4">
                        <h2>
                        Details
                        </h2>
                        <div className="sBt">
                            <p>Caregiver type</p>
                            <p className="light">
                            {Ad.caregiver_type}
                            </p>
                        </div>
                        <div className="sBt">
                            <p>Country </p>
                            <p className="light">
                            {Ad.country}
                            </p>
                        </div>
                        <div className="sBt">
                            <p>Age range</p>
                            <p className="light">
                            {Ad.age_range}                            
                            </p>
                        </div>
                        <div className="sBt">
                            <p>Sex</p>
                            <p className="light">
                            {Ad.gender}
                            </p>
                        </div>

                    </div>
                    
                </div>
                <div className="col-sm-4">
                    <div className="outBox mt-3 pa-0">
                        <div className="flexEnd">
                            <span className="mr-2">
                            <FavoriteBorderIcon/>
                            </span>
                            <ShareOutlinedIcon/>
                        </div>
                        <div className="proMain d-flex mt-2">
                            <div className="profileImg">
                                <img src={ Ad.user_pic } alt=""/>
                            </div>
                            <div className="mt-3 ml-3">
                            <p className="mb-0 bold">
                                { Ad.name }
                            </p>

                            </div>
                        </div>
                    </div>
                <div className="outBox mt-3">
                        <h2>
                        Contact Info
                        </h2>
                        
                        
                        <div className="sBt">
                            <p>City:</p>
                            <p className="light">
                            
                            {Ad.city}
                            </p>
                        </div>
                        <div className="sBt">
                            <p>Phone: </p>
                            <p className="light">
                            {Ad.phone_no}
                            </p>
                        </div>
                        <div className="sBt">
                            <p>E-mail:</p>
                            <p className="light">
                            
                            {Ad.email}
                            </p>
                        </div>
                        <div className="sBt">
                            <p>Zipcode:</p>
                            <p className="light">
                            {Ad.zip_code}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </Fragment>
  );
}

export default Ad_detail;
