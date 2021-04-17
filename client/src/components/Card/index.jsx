import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getTodos } from "../../api";
import { Link } from "react-router-dom";
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';


export default function TitlebarGridList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos()
      setItems(todos)
    }
    fetchItems()
  }, [])

  return (
    <div className="cardMain mb-5">
      <div className="row">
        {
          items.map(todo => (
            <div className="col-sm-3">
              <Link to={`/ad_detail/${todo._id}`} key={todo._id}>
                <div className="AdBox">
                  <div className="AdImg">
                    <img src={ todo.user_pic } alt="" />
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
        }
      </div>
    </div>
  );
}
