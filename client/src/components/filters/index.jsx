import React, { Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

export default function Filters() {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="row bgFFF">
      <div className="col-sm-9 m-auto">
        <div className="filters">
          <div className="row">
            <div className="col-sm-3">
              <FormControl variant="outlined" className="">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
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
                  value={state.Location}
                  onChange={handleChange}
                  label="Location"
                  inputProps={{
                    name: "Location",
                    id: "outlined-Location-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Location</option>
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
                  value={state.Sex}
                  onChange={handleChange}
                  label="Sex"
                  inputProps={{
                    name: "Sex",
                    id: "outlined-Sex-native-simple",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Male</option>
                  <option value={10}>Female</option>
                </Select>
              </FormControl>
            </div>
            <div className="col-sm-3">
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
