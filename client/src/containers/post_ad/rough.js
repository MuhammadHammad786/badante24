import "../../assets/css/App.css";
import "../../assets/css/form.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import React, { useEffect, useState, Fragment } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Posting_form () {
    const { isAuthenticated } = useAuth0();

    let history = useHistory();

    const [Ad, setAd] = useState({
        name: "",
        price: "",
        caregiver_type : "",
        country : "",
        age_range : "",
        gender : "",
        service_desc : "",
        zip_code : "",
        phone_no : "",
        email: "",
        city: "",
        ad_img:"",
        user_id : sessionStorage.getItem("user_id"),
        user_pic : sessionStorage.getItem("user_pic")

    });

    const onInputChange = e => {
        setAd({ ...Ad, [e.target.name]: e.target.value });
    }

    console.log(Ad);

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("https://badanti.herokuapp.com/create_ad", Ad);
        history.push(`/Profile/${sessionStorage.getItem("user_id")}`);
        alert("Ad Posted Successfully");
    }
    if(!isAuthenticated)
    {
        return(
            <>
                <Navbar fixed="top" />
                <div className="emptyPage">
                    <h2 className="noFound">Please Login To Continue</h2>
                </div>
                <Footer />
            </>
        )
    }
    return (
        <Fragment>
            <Navbar fixed="top" />
            <div className="wrapper">
            <section className="signForm bgFFF">
                <div className="col-sm-9 m-auto">
                    <h2 className="logo">Badenti Services</h2>
                    <p className="bold">Post Ad</p>
                    <form onSubmit={e => onSubmit(e)} encType="multipart/form-data">
                        <div className="outlineBox">
                            <p className="boxHead">General Information</p>
                            <div className="row boxBody">
                                <div className="col-sm-6">
                                    <label htmlFor="" className="mt-0">
                                        Enter your Name and Surname: <span className="red">*</span>
                                    </label>
                                    <input
                                        value={Ad.name}
                                        onChange={e => onInputChange(e)}
                                        type="text"
                                        placeholder="Name and Surname"
                                        className="form-control"
                                        required
                                        name="name"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="" className="mt-0">
                                        Price: <span className="red">*</span>
                                    </label>
                                    <input
                                        value={Ad.price}
                                        onChange={e => onInputChange(e)}
                                        type="text"
                                        placeholder="Enter Hourly Amount [€]"
                                        className="form-control"
                                        required
                                        name="price"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        Caregiver Type: <span className="red">*</span>
                                    </label>
                                    <select id="" className="form-control"
                                    required
                                        value={Ad.caregiver_type}
                                        onChange={e => onInputChange(e)}
                                        name="caregiver_type"
                                    >
                                        <option value="">
                                            Select Option
                                            </option>
                                        <option value="First Experince Caregiver">
                                            First Experince Caregiver
                                            </option>
                                        <option value="Experince Caregiver ( > 5 years of experience)">
                                            Experince Caregiver ( > 5 years of experience)
                                            </option>
                                        <option value="Professional Caregiver ( > 15 years of experience)">
                                            Professional Caregiver ( > 15 years of experience)
                                            </option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        Country: <span className="red">*</span>
                                    </label>
                                    <select id="" className="form-control"
                                    required
                                    value={Ad.country}
                                    onChange={e => onInputChange(e)}
                                    name="country"
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        Age Range: <span className="red">*</span>
                                    </label>
                                    <select id="" className="form-control"
                                    required
                                    value={Ad.age_range}
                                    onChange={e => onInputChange(e)}
                                    name="age_range"
                                    >
                                        <option value="">
                                            Select Option
                                            </option>
                                        <option value="18-29 years">18-29 years</option>
                                        <option value="30-39 years">30-39 years</option>
                                        <option value="40-49 years">40-49 years</option>
                                        <option value="50-69 years">50-69 years</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        Gender: <span className="red">*</span>
                                    </label>
                                    <select id="" className="form-control"
                                    required
                                    value={Ad.gender}
                                    onChange={e => onInputChange(e)}
                                    name="gender"
                                    >
                                        <option value="">
                                            Select Option
                                            </option>
                                        <option value="Women">Women</option>
                                        <option value="Men">Men</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="">
                                        Service Description: <span className="red">*</span>
                                    </label>
                                    <textarea id="" className="form-control"
                                    required placeholder="Service Description"
                                    value={Ad.service_desc}
                                    onChange={e => onInputChange(e)}
                                    name="service_desc"
                                    ></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="">
                                        Upload Image: <span className="red">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        value={Ad.ad_img}
                                        name="ad_img"
                                        onChange={e => (e.target.files[0])}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="outlineBox">
                            <p className="boxHead">Contact Info</p>
                            <div className="row boxBody">
                                <div className="col-sm-6">
                                    <label htmlFor="" className="mt-0">
                                        Zip Code: <span className="red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Zip Code"
                                        className="form-control"
                                        required
                                        value={Ad.zip_code}
                                        onChange={e => onInputChange(e)}
                                        name="zip_code"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="" className="mt-0">
                                        Phone Number <span className="red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        required
                                        value={Ad.phone_no}
                                        onChange={e => onInputChange(e)}
                                        name="phone_no"

                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        Email <span className="red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                        required
                                        value={Ad.email}
                                        onChange={e => onInputChange(e)}
                                        name="email"

                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">
                                        City: <span className="red">*</span>
                                    </label>
                                    <select id="" className="form-control"
                                    required
                                        value={Ad.city}
                                        onChange={e => onInputChange(e)}
                                        name="city"
                                    >
                                        <option value="">
                                            Select Option
                                            </option>
                                        <option value="Italy">Rome</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" variant="contained" color="primary">
                            Post Ad
                            </Button>
                    </form>
                </div>
            </section>

            </div>
            <Footer />
        </Fragment>
    );

}

export default Posting_form;
