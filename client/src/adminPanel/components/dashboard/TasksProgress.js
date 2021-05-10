import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../../api";


function TasksProgress() {

  const [items, setItems] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`${baseURL}/pendingAds/`);
    setItems(result.data);
  }, []);

  return (
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
              PENDING ADS
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
                backgroundColor: orange[600],
                height: 56,
                width: 56
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        {/* <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={15}
            variant="determinate"
          />
        </Box> */}
      </CardContent>
    </Card>
  )
}
export default TasksProgress;
