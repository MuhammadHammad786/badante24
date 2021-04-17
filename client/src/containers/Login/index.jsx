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
import { useAuth0 } from '@auth0/auth0-react';



function Signin() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
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
      <section className="signForm bgFFF">
        <div className="col-sm-4 m-auto">
          <h2 className="logo">Badenti Services</h2>
          <form Validate autoComplete="on">
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
            <Button variant="contained" color="primary">
                SignIn
            </Button>
          </form>
          <div className="socialLogin">
                <p className="divider mb-0">
                  OR  
                </p>
            <Button className="" variant="contained" color="secondary">
            Continue With Google
            </Button>
            <Button variant="contained" color="primary">
                Continue With FB 
            </Button>
            <button onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Signin;
