import moment from 'moment';
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
import { getTodos } from "../../../api";
import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";
import Popper from "popper.js";
import axios from "axios";
import { baseURL } from "../../../api";



function LatestOrders() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [DeleteChange, setDeleteChange] = useState(false);
  const [ApproveChange, setApproveChange] = useState(false);
  const [RejectChange, setRejectChange] = useState(false);

  useEffect(async () => {
    const result = await axios.get(`${baseURL}/all_ads/`);
    setItems(result.data);
    setLoading(true);
  }, []);

  useEffect(async () => {
    const result = await axios.get(`${baseURL}/all_ads/`);
    setItems(result.data);
    setLoading(true);
  }, [DeleteChange] || [ApproveChange] || [RejectChange]);

  // delete ad
  const handleDelete = (Ad_id) => {
    console.log(Ad_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to delete this Ad. You won't be able to undo this.",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${baseURL}/deleteAd/${Ad_id}`);
        DeleteNotify();
        setDeleteChange(true);
      }
    })

  }
  // delete ad
  const handleApprove = (Ad_id) => {
    console.log(Ad_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to approve this Ad.",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes Approve it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.get(`${baseURL}/approveAd/${Ad_id}`);
        ApproveNotify();
        setApproveChange(true);
      }
    })

  }
  
  // Reject ad
  const handleReject = (Ad_id) => {
    console.log(Ad_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to reject this Ad.",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes Reject it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.get(`${baseURL}/rejectAd/${Ad_id}`);
        RejectNotify();
        setRejectChange(true);
      }
    })

  }

  //delete notify
  const DeleteNotify = () => toast.error('🦄 Ad Successfully Delete!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const ApproveNotify = () => toast.success('🦄 Ad Successfully Approved!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  
  const RejectNotify = () => toast.error('🦄 Ad Successfully Rejected!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  var ads;
  if (items.length > 0) {
    ads = <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell>
              Location
            </TableCell>
            <TableCell>
              Ad image
            </TableCell>
            <TableCell>
              Phone No.
            </TableCell>
            <TableCell>
              Email
            </TableCell>
            <TableCell>
              Caregiver Type
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
              View Ad
            </TableCell>
            {/* <TableCell sortDirection="desc">
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
            </TableCell> */}
            <TableCell>
              Status
            </TableCell>
            <TableCell>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            items.map((Ad) => (
              <TableRow
                hover
                key={Ad._id}
              >

                <TableCell>
                  {Ad.name}
                </TableCell>
                <TableCell>
                  {Ad.country}
                </TableCell>
                <TableCell>
                  <img src={Ad.ad_img} alt="{ad_img}" style={{ "height": "70px", "width": "100px" }} />
                </TableCell>
                <TableCell>
                  {Ad.phone_no}
                </TableCell>
                <TableCell>
                  {Ad.email}
                </TableCell>
                <TableCell>
                  {Ad.caregiver_type}
                </TableCell>
                <TableCell>
                  {Ad.gender}
                </TableCell>
                <TableCell>
                  {Ad.age_range}
                </TableCell>
                <TableCell>
                  {Ad.service_desc}
                </TableCell>
                <TableCell>
                  <NavLink to={`/ad_detail/${Ad._id}`}>View Ad</NavLink>
                </TableCell>
                <TableCell>
                  {Ad.status == 'pending' ?
                    <>
                      <Chip
                        color="warning"
                        label={Ad.status}
                        size="small"
                      />
                    </>
                    :

                    Ad.status == 'active' ?
                      <>
                        <Chip
                          color="primary"
                          label={Ad.status}
                          size="small"
                        />
                      </>
                      :

                      Ad.status == 'rejected' ?
                        <>
                          <Chip
                            color="secondary"
                            label={Ad.status}
                            size="small"
                          />
                        </>
                        :

                        null

                  }


                </TableCell>
                <TableCell>
                  <IconButton id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  >
                    <MoreHorizIcon />
                  </IconButton>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button"
                      onClick={() => {
                        handleDelete(Ad._id);
                      }}
                    >Delete</button>
                    <button className="dropdown-item" type="button"
                      onClick={() => {
                        handleApprove(Ad._id);
                      }}
                    >Approve</button>
                    <button className="dropdown-item" type="button"
                      onClick={() => {
                        handleReject(Ad._id);
                      }}
                    >Reject</button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
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
    </>

  } else {
    ads = <h1 className="mt-3 ml-3">No Ads Found!</h1>

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
    <Card>

      <ToastContainer />

      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          {ads}
        </Box>
      </PerfectScrollbar>

    </Card>

  );


}

export default LatestOrders;
