import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../../api";


function TotalProfit() {

  const [items, setItems] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`${baseURL}/rejectedAds/`);
    setItems(result.data);
  }, []);

  return(
    <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Rejected Ads
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {items.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
}

export default TotalProfit;
