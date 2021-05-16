import React, { Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import axios from "axios";
import { baseURL } from "../../api";


export default function Filters() {

  const [ageRange, setAgeRange] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [Gender, setGender] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("work");
    axios.get(`${baseURL}/filters/?ageRange=${ageRange}&location=${Location}&gender=${Gender}`)

  }


  return (
    <div className="row bgFFF mb-5">
      <div className="col-sm-9 m-auto">
        <div className="filters">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col-sm-3">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Age-Range
                </InputLabel>
                  <Select
                    native
                    label="Age-Range"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="18-29 years">18-29 years</option>
                    <option value="30-39 years">30-39 years</option>
                    <option value="40-49 years">40-49 years</option>
                    <option value="50-69 years">50-69 years</option>
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-3">
                <FormControl variant="outlined" className="">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Location
                </InputLabel>
                  <Select
                    native
                    label="Location"
                    value={Location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="Italy">Italy</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-3">
                <FormControl variant="outlined" className="">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Sex
                </InputLabel>
                  <Select
                    native
                    value={Gender}
                    label="Gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-3">
                <Button variant="contained" type="submit" color="primary">
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
