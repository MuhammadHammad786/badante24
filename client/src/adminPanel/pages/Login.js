import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

const Login = () => {

  let history = useHistory();

  return (
    <>
      <Helmet>
        <title>Badanti Service | Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}

            validate={values => {
              const errors = {};
              if (values.email == "admin@gmail.com") {
                if (values.password == "admin") {
                  console.log("login");
                } else {
                  console.log("incorrect password")
                  errors.password = 'incorrect password';
                }
              } else {
                console.log("incorrect email");
                errors.email = 'incorrect email';
              }
              return errors;
            }}


            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                if (values.email == "admin@gmail.com") {
                  if (values.password == "admin") {
                    console.log("login");
                    localStorage.setItem('adminLogin', true);
                    history.push("./");
                  } else {
                    console.log("incorrect password");
                  }
                } else {
                  console.log("incorrect email");
                }
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <div className="textCenter">
                  <Typography color="textPrimary" variant="h2">
                    Badanti Service
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                  >
                    Admin Sign in
                  </Typography>

                  </div>
                </Box>
                <TextField  
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Enter to the dashboard
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
