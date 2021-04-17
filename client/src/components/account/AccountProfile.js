import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';

function AccountProfile (props){
  const { user, isAuthenticated } = useAuth0();
  // sessionStorage.setItem("user_id", user.sub);
  // sessionStorage.setItem("user_pic", user.picture);
  
  return(
    <>

<Card {...props}>
  <CardContent>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      
      <Avatar
        src={user.picture}
        sx={{
          height: 100,
          width: 100
        }}
      />
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h3"
      >
        {user.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body1"
      >
        {user.email}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body1"
      >
        {`${moment().format('hh:mm A')}`}
      </Typography>
    </Box>
  </CardContent>
  <Divider />
  <CardActions>
    <Button
      color="primary"
      fullWidth
      variant="text"
    >
      Upload picture
    </Button>
  </CardActions>
</Card>

    </>
    
  )
}


export default AccountProfile;
