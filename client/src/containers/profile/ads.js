import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CircularProgress from "@material-ui/core/CircularProgress";


export default function AdCom() {

    // ReceivedData
    const params = useParams();
    const user_id = params.user_id;

    const [proAd, setproAd] = useState([]);
    const [loading, setLoading] = useState(false);
    const [change, setChange] = useState(false);
    
    useEffect(async () => {
        const result = await axios.get(`http://localhost:4000/profile/${user_id}`);
        setproAd(result.data);
        setLoading(true);
    }, []);

    useEffect(async () => {
        const result = await axios.get(`http://localhost:4000/profile/${user_id}`);
        setproAd(result.data);
        setLoading(true);
    }, [change]);


    // delete ad
    const handleDelete = (Ad_id) => {
        console.log(Ad_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to delete your Ad. You won't be able to undo this.",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/deleteAd/${Ad_id}`).then(() => {
                    setproAd(
                        proAd.filter((Ad) => {
                            return Ad._id != Ad_id;
                        })
                    )
                });

                DeleteNotify();
                setChange(true);
            }
        })

    }

    //delete notify
    const DeleteNotify = () => toast.error('🦄 Ad Successfully Delete!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    var ads;
    console.log(proAd.length);
    if (proAd.length > 0) {
        ads = proAd.map(Ad => (
            <div className="col-sm-12" key={Ad._id}>
                <div className="proAd_row mt-4">
                    <div className="proAd_img">
                        <img src={Ad.ad_img} alt="" />
                    </div>
                    <p className="mb-0 bold">{Ad.name}</p>
                    <p className="mb-0 loc">
                        <PersonPinCircleOutlinedIcon />
                        {Ad.country}
                    </p>

                    <Link to={`/ad_detail/${Ad._id}`}> View Ad</Link>

                    {Ad.status == 'pending'? 
                    <>
                    <span className="badge badge-secondary">pending</span>
                    <p className="mb-0">This Ad is under review</p>
                    </>
                    : 

                    Ad.status == 'active'? 
                    <>
                    <span className="badge badge-primary">Active</span>
                    <p className="mb-0">This Ad is currently live</p>
                    </>
                    :

                    Ad.status == 'rejected'? 
                    <>
                    <span className="badge badge-danger">rejected</span>
                    <p className="mb-0">This Ad was rejected by Admin</p>
                    </>
                    :

                    null
                    
                    }
                    <p className="mb-0">{Ad.post_date}</p>
                    <div className="dropdown">
                        <IconButton id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        >
                            <MoreHorizIcon />
                        </IconButton>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">
                                <Link to={`/edit_ad/${Ad._id}`}>Edit</Link>
                            </button>
                            <button className="dropdown-item" type="button"
                                onClick={() => {
                                    handleDelete(Ad._id);
                                }}
                            >Delete</button>
                        </div>
                    </div>

                </div>
            </div>

        ))
    } else {
        ads = <h2>No Ad Found!</h2>
    }

    if (!loading) {
        return (
            <>
                <div className="row mt-5 mb-5">
                    <div className="col-sm-1 m-auto">
                        <CircularProgress />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <ToastContainer />
            {
                ads
            }
        </>
    )
}