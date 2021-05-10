import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';
import axios from "axios";
import React, { useState, useEffect } from "react";


function Budget() {
  const [items, setItems] = useState([]);
  
  useEffect(async () => {
    const result = await axios.get("http://localhost:4000/");
    setItems(result.data);
  }, []);

  return(
    <Card
    sx={{ height: '100%' }}
  >
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
            Total Ads
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            { items.length }
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>

    </CardContent>
  </Card>

  )
}

export default Budget;
