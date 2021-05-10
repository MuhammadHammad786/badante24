import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getTodos } from "../../api";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";

export default function TitlebarGridList() {
  const [items, setItems] = useState([]);
  const [loading , setLoading] = useState(false);
  
  useEffect(async () => {
      const result = await axios.get("http://localhost:4000/home");
      setItems(result.data);
      setLoading(true);
  }, []);

  var ads;
  if(items.length > 0)
  {
    ads = items.map(todo => (
      <div className="col-sm-3">
        <Link to={`/ad_detail/${todo._id}`} key={todo._id}>
          <div className="AdBox">
            <div className="AdImg">
              <img src={ todo.ad_img } alt="" />
            </div>
            <div className="AdDesc">
              <p className="bold mb-0 ml-1">
                { todo.name }
            </p>
              <p className="mb-0 loc">
                <PersonPinCircleOutlinedIcon />
                { todo.country }
            </p>
            </div>
            <IconButton className="iconBtn">
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        </Link>
      </div>
    ))
  }else
  {
    ads = <h1 className="mt-5">No Ads Found!</h1>
  }

  if(!loading)
  {
      return(
        <div className="row mt-5 mb-5">
          <div className="col-sm-1 m-auto">
          <CircularProgress/>
          </div>

        </div>
      )
    }

    return (
      <div className="cardMain mb-5">
        <div className="row">
          {
            ads
          }
        </div>
      </div>
    );


}
