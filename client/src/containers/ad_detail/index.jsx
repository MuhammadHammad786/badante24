import "../../assets/css/App.css";
import "../../assets/css/ad_detail.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import React, { Fragment, useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { baseURL } from "../../api";
import PhoneIcon from "@material-ui/icons/Phone";
import UpdateIcon from '@material-ui/icons/Update';
import moment from 'moment';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";




function Ad_detail() {
    const params = useParams();
    const id = params.id;

    // ReceivedData
    const [loading, setLoading] = useState(false);
    const [Ad, setAd] = useState([]);
    useEffect(async () => {
        const result = await axios.get(`${baseURL}/view_ad/${id}`);
        setAd(result.data);
        setLoading(true);
    }, []);

    // similar ads
    const [items, setItems] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`${baseURL}/top_ads`);
    setItems(result.data);
    setLoading(true);
  }, []);

    if (!loading) {
        return (
            <>
                <Navbar fixed="top" />
                <div className="row mt-5 mb-5">
                    <div className="col-sm-1 m-auto">
                        <CircularProgress />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <Fragment>
                <Navbar fixed="top" />
                <div className="wrapper">
                    <section className="ad_detail">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="outBox mt-3">
                                    <div className="ad_img">
                                        <img src={Ad.ad_img} alt="" />
                                    </div>
                                    <h4 className="mt-3">{Ad.name}</h4>
                                    <p className="">{Ad.service_desc}</p>
                                </div>
                                <div className="outBox mt-4">
                                    <h2>Details</h2>
                                    <div className="sBt">
                                        <p>Caregiver type</p>
                                        <p className="light">{Ad.caregiver_type}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>Country </p>
                                        <p className="light">{Ad.country}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>Age range</p>
                                        <p className="light">{Ad.age_range}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>Sex</p>
                                        <p className="light">{Ad.gender}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="outBox mt-3 pa-0">
                                    <div className="flexEnd">
                                        <span className="mr-2">
                                            <FavoriteBorderIcon />
                                        </span>
                                        <ShareOutlinedIcon />
                                    </div>
                                    <div className="proMain d-flex mt-2">
                                        <div className="profileImg">
                                            <img src={Ad.user_pic} alt="" />
                                        </div>
                                        <div className="mt-3 ml-3">
                                            <p className="mb-0 bold">{Ad.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="outBox mt-3">
                                    <h2>Contact Info</h2>

                                    <div className="sBt">
                                        <p>City:</p>
                                        <p className="light">{Ad.city}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>Phone: </p>
                                        <p className="light">{Ad.phone_no}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>E-mail:</p>
                                        <p className="light">{Ad.email}</p>
                                    </div>
                                    <div className="sBt">
                                        <p>Zipcode:</p>
                                        <p className="light">{Ad.zip_code}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="similar mt-5">
                                    <b>Similar Ads</b>
                                 </h2>
                            </div>
                            { 
                                items.map((todo) => (
                                    <div className="col-sm-3">
                                        <Link to={`/ad_detail/${todo._id}`} key={todo._id}>
                                            <div className="AdBox">
                                                <div className="AdImg">
                                                    <img src={todo.ad_img} alt="" />
                                                </div>
                                                <div className="AdDesc">
                                                    <p className="bold mb-0 ml-1">{todo.name}</p>
                                                    <div className="mb-0 mt-1 loc d-flex">
                                                        <PersonPinCircleOutlinedIcon />
                                                        <p className="mb-0">{todo.country}</p>
                                                    </div>
                                                    <div className="mb-0 mt-2 loc d-flex">
                                                        <PhoneIcon />
                                                        <p className="mb-0">{todo.phone_no}</p>
                                                    </div>
                                                    <div className="mb-0 mt-2 loc d-flex">
                                                        <UpdateIcon />
                                                        <p className="mb-0">
                                                            {moment(todo.postDate).fromNow()}
                                                        </p>
                                                    </div>
                                                </div>
                                                <IconButton className="iconBtn">
                                                    <FavoriteBorderIcon />
                                                </IconButton>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                                }
                            </div>
                    </section>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Ad_detail;
