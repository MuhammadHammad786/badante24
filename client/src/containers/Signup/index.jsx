import "../../assets/css/App.css";
import "../../assets/css/form.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index.jsx";
import React, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FacebookIcon from '../../adminPanel/icons/Facebook';
// import GoogleIcon from '../icons/Google';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from "react-router-dom";



function Signup() {
  let history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.googleId);
    console.log(response.profileObj.imageUrl);
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("user_id", response.profileObj.googleId);
    sessionStorage.setItem("user_pic", response.profileObj.imageUrl);
    sessionStorage.setItem("user_name", response.profileObj.name);
    sessionStorage.setItem("user_email", response.profileObj.email);
    history.push(`./profile/${response.profileObj.googleId}`)
  }

  const responseFacebook = (response) => {
    console.log(response);
    console.log(response.userID);
    console.log(response.name);
    console.log(response.email);
    console.log(response.picture.data.url);
    sessionStorage.setItem("isLoggedIn", true); 
    sessionStorage.setItem("user_id", response.userID);
    sessionStorage.setItem("user_pic",response.picture.data.url);
    sessionStorage.setItem("user_name", response.name);
    sessionStorage.setItem("user_email", response.email);
    history.push(`./profile/${response.userID}`)
  }


  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <Navbar fixed="top" />
      <div className="wrapper">
      <section className="signForm bgFFF">
        <div className="col-md-4 m-auto">
          <h2 className="logo">Badenti Services</h2>
          <form Validate autoComplete="on">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <FormControl className="" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControl className="" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confrim Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={130}
              />
            </FormControl>
            <Button variant="contained" color="primary">
                Signup
            </Button>
          </form>
          <div className="socialLogin">
                <p className="divider mb-0">
                  OR  
                </p>
                <FacebookLogin
                appId="298401585088943"
                cssClass="fbBtn"
                icon={<FacebookIcon />}
                size="medium"
                textButton="Continue with Facebook"
                fields="name,email,picture"
                callback={responseFacebook}
              />
              <GoogleLogin
                clientId="174975254752-tf93hpk2irnc6dslpaopu92b5fnhqu1d.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </Fragment>
  );
}

export default Signup;
