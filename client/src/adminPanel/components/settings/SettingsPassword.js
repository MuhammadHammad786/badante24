import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import axios from "axios";
import { baseURL } from "../../../api";
import Alert from '@material-ui/lab/Alert';


const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });
  const [status,setStatus] = useState("");
  const [successStatus,setSuccessStatus] = useState("");

  if(status){
    var alertMsg =
    <Alert severity="error">{status}</Alert> 
  }
  
  if(successStatus){
    var successMsg =
    <Alert severity="success">{successStatus}</Alert> ;
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(values.password == values.confirm){
      axios.post(`${baseURL}/updateAdminPass`, {password : values.password})
      .then((response) => {
        if (response.data.message) {
          setStatus(response.data.message);
        }else{
          setSuccessStatus("password updated successfully");
          setValues({
            password: '',
            confirm: ''
          });
        }
      });
    }else{
      console.log('password not match');
      setStatus("password & confirm password not match");
    }
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value 
    });
  };

  return (
    <form {...props} onSubmit={(e) => onSubmit(e)}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          {alertMsg}
          {successMsg}
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
            required
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
