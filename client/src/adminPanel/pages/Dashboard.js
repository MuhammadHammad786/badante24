import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Budget from '../components/dashboard//Budget';
import LatestOrders from '../components/dashboard//LatestOrders';
import LatestProducts from '../components/dashboard//LatestProducts';
import Sales from '../components/dashboard//Sales';
import TasksProgress from '../components/dashboard//TasksProgress';
import TotalCustomers from '../components/dashboard//TotalCustomers';
import TotalProfit from '../components/dashboard//TotalProfit';
import TrafficByDevice from '../components/dashboard//TrafficByDevice';
import DashboardLayout from '../components/DashboardLayout';
import '../../assets/css/dashboard.css';



const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Badenti</title>
    </Helmet>
    <DashboardLayout/>
    <div className="adminContent">
      <div className="adminContentChild">
      <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={6}
            xs={12}
          >
            <Sales />
          </Grid>

          <Grid
            item
            lg={12}
            md={12}
            xl={6}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>

      </div>
    </div>

    
  </>
);

export default Dashboard;
