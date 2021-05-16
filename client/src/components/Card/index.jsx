import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getTodos } from "../../api";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";
import { baseURL } from "../../api";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

export default function TitlebarGridList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [ageRange, setAgeRange] = useState("");
  const [Location, setLocation] = useState("");
  const [Gender, setGender] = useState("");
  const [Filters, setFilters] = useState(false);


  useEffect(async () => {
    const result = await axios.get(`${baseURL}/home`);
    setItems(result.data);
    setLoading(true);
  }, []);

  

  const refreshFilters = async () => {
    const result = await axios.get(`${baseURL}/home`);
    setItems(result.data);
    setLoading(true);
    setFilters(false);
    setGender("");
    setAgeRange("");
    setLocation("");
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.get(`${baseURL}/filters/?ageRange=${ageRange}&location=${Location}&gender=${Gender}`);
    setItems(result.data);
    setLoading(true);
    setFilters(true);
  }

  var FiltersResult;
  if (Filters) {
    FiltersResult =
      <div className="FiltersResult">
        <p className="mb-0 mr-4"> {items.length} Badanti found!</p>
        <Button variant="contained" color="secondary" onClick={refreshFilters}>
          Refresh Filters
                </Button>
      </div>
  }

  var ads;
  if (items.length > 0) {
    ads = items.map(todo => (
      <div className="col-sm-3">
        <Link to={`/ad_detail/${todo._id}`} key={todo._id}>
          <div className="AdBox">
            <div className="AdImg">
              <img src={todo.ad_img} alt="" />
            </div>
            <div className="AdDesc">
              <p className="bold mb-0 ml-1">
                {todo.name}
              </p>
              <p className="mb-0 loc">
                <PersonPinCircleOutlinedIcon />
                {todo.country}
              </p>
            </div>
            <IconButton className="iconBtn">
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </Link>
      </div>
    ))
  } else {
    ads = <h1 className="mt-5">No Ads Found!</h1>
  }

  if (!loading) {
    return (
      <div className="row mt-5 mb-5">
        <div className="col-sm-1 m-auto">
          <CircularProgress />
        </div>

      </div>
    )
  }

  return (
    <>
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
                      required
                      label="Age-Range"
                      value={ageRange}
                      onChange={(e) => setAgeRange(e.target.value)}
                    >
                      <option aria-label="None"/>
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
                      required
                      label="Location"
                      value={Location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option aria-label="None"/>
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
                      required
                      value={Gender}
                      label="Gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option aria-label="None"/>
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

      <div className="cardMain mb-5">
        {
          FiltersResult
        }
        <div className="row">
          {
            ads
          }
        </div>
      </div>
    </>
  );


}
