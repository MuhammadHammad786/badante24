import "../../assets/css/App.css";
import "../../assets/css/form.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import React, { useEffect, useState, Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { baseURL } from "../../api";

function Posting_form() {

  let history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [caregiver_type, setCaregiver_type] = useState("");
  const [country, setCountry] = useState("");
  const [age_range, setAge_range] = useState("");
  const [gender, setGender] = useState("");
  const [service_desc, setService_desc] = useState("");
  const [ad_img, setAd_img] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  const Ad = {
    name: name,
    price: price,
    caregiver_type: caregiver_type,
    country: country,
    age_range: age_range,
    gender: gender,
    service_desc: service_desc,
    zip_code: zip_code,
    phone_no: phone_no,
    email: email,
    city: city,
    ad_img: imgurl,
    user_id: sessionStorage.getItem("user_id"),
    user_pic: sessionStorage.getItem("user_pic")
  }

  useEffect(() => {
    if (imgurl) {
      axios.post(`${baseURL}/create_ad`, Ad);
      history.push(`/Profile/${sessionStorage.getItem("user_id")}`);
    }

  }, [imgurl])



  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append("file", ad_img)
    data.append("upload_preset", "badenti_service")
    data.append("cloud_name", "badentiservice")
    fetch("https://api.cloudinary.com/v1_1/badentiservice/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => {
        setImgurl(data.url);
      }).catch(err => {
        console.log(err);
      })

    setLoading(true);
    setOpen(!open);

  };

  const [open, setOpen] = React.useState(false);

  let isLoggedIn = sessionStorage.getItem("isLoggedIn");

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return (
      <>
        <Navbar fixed="top" />
        <div className="emptyPage">
          <h2 className="noFound">Please <Link to="/signin">Login</Link> To Continue</h2>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <Fragment>
      <Backdrop className="Backdrop" open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Navbar fixed="top" />
      <div className="wrapper">
        <section className="signForm bgFFF">
          <div className="col-sm-9 m-auto">
            <h2>Badenti Services</h2>
            <p className="bold">Post Ad</p>
            <form onSubmit={(e) => onSubmit(e)} encType="multipart/form-data">
              <div className="outlineBox">
                <p className="boxHead">General Information</p>
                <div className="row boxBody">
                  <div className="col-sm-6">
                    <label htmlFor="" className="mt-0">
                      Enter your Name and Surname:{" "}
                      <span className="red">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name and Surname"
                      className="form-control"
                      name="name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="" className="mt-0">
                      Price: <span className="red">*</span>
                    </label>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      placeholder="Enter Hourly Amount [€]"
                      className="form-control"
                      name="price"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="">
                      Caregiver Type: <span className="red">*</span>
                    </label>
                    <select
                      id=""
                      className="form-control"
                      value={caregiver_type}
                      onChange={(e) => setCaregiver_type(e.target.value)}
                      name="caregiver_type"
                    >
                      <option value="">Select Option</option>
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
                    <select
                      id=""
                      className="form-control"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                    <select
                      id=""
                      className="form-control"
                      value={age_range}
                      onChange={(e) => setAge_range(e.target.value)}
                      name="age_range"
                    >
                      <option value="">Select Option</option>
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
                    <select
                      id=""
                      className="form-control"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                    >
                      <option value="">Select Option</option>
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="">
                      Service Description: <span className="red">*</span>
                    </label>
                    <textarea
                      id=""
                      className="form-control"
                      placeholder="Service Description"
                      value={service_desc}
                      onChange={(e) => setService_desc(e.target.value)}
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
                      name="ad_img"
                      onChange={(e) => setAd_img(e.target.files[0])}
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
                      value={zip_code}
                      onChange={(e) => setZip_code(e.target.value)}
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
                      value={phone_no}
                      onChange={(e) => setPhone_no(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="">
                      City: <span className="red">*</span>
                    </label>
                    <select
                      id=""
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      name="city"
                    >
                      <option value="">Select Option</option>
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
