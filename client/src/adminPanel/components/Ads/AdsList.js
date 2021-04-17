import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

const orders = [
  {
    id: uuid(),
    location: 'Italy',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    ageRange : '18-20 years',
    service_desc : "xyz",
    gender : "Female",
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    location: 'Italy',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    ageRange : '18-20 years',
    service_desc : "xyz",
    gender : "Female",
    createdAt: 1555016400000,
    status: 'active'
  },
  {
    id: uuid(),
    location: 'Italy',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    ageRange : '18-20 years',
    service_desc : "xyz",
    gender : "Female",
    createdAt: 1554670800000,
    status: 'active'
  },
  {
    id: uuid(),
    location: 'Italy',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    ageRange : '18-20 years',
    service_desc : "xyz",
    gender : "Female",
    createdAt: 1554670800000,
    status: 'active'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>

    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Location
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Gender
              </TableCell>
              <TableCell>
                Age-range
              </TableCell>
              <TableCell>
                Service Description
              </TableCell>
              <TableCell>
                View
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.location}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.gender}
                </TableCell>
                <TableCell>
                  {order.ageRange}
                </TableCell>
                <TableCell>
                  {order.service_desc}
                </TableCell>
                <TableCell>
                  <NavLink to="ad_detail">View</NavLink>
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
  
);

export default LatestOrders;
