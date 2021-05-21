import 'react-perfect-scrollbar/dist/css/styles.css';
import { Switch,Route } from 'react-router-dom';
import './adminPanel/mixins/chartjs';
import Home from './containers/Home/index.jsx';
import Posting_form from'./containers/post_ad/index.jsx';
import Edit_ad from'./containers/edit_ad/index.jsx';
import Ad_detail from './containers/ad_detail/index.jsx'; 
import Signin from './containers/Login/index.jsx'; 
import Profile from './containers/profile/index.jsx'; 
import Signup from './containers/Signup/index.jsx'; 
import Dashboard from './adminPanel/pages/Dashboard';
import CustomerList from './adminPanel/pages/CustomerList';       
import SettingsView from './adminPanel/pages/Settings';       
import Ads from './adminPanel/pages/Ads';       
import Login from './adminPanel/pages/Login';       
import Logout from './adminPanel/pages/Logout';       
import { Fragment,React } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./containers/notFound/index"



const App = () => {

  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post_ad" component={Posting_form} />
          <Route exact path="/edit_ad/:id" component={Edit_ad} />
          <Route exact path="/ad_detail/:id" component={Ad_detail} />
          <Route exact path="/profile/:user_id" component={Profile} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/adminPanel" component={Dashboard} />
          <Route exact path="/adminPanel/login" component={Login} />
          <Route exact path="/adminPanel/logout" component={Logout} />
          <Route exact path="/adminPanel/customers" component={CustomerList} />
          <Route exact path="/adminPanel/settings" component={SettingsView} />
          <Route exact path="/adminPanel/ads" component={Ads} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
  );
};

export default App;
// Badante24 changes and missing things:

// 1. Logo
// 2. Sign in / Signup/Register
// 3. Please Login To Continue ( Login ko link day din, ya login ko button shape ma lay ae )
// 4.Flag picture 
// 5. adminPanel
// i. Total Ads (should be dynamic) 
// ii. Users?
// iii. Update password is not working
// iv. admin login page: "Sign in now replace" to "Enter to the dashboard" and blew link for the client website
// v.  white screen after logout, ads
// 6. No profile showing in the chroom but showing in incongito
// 7. Ads
// i. Ads card ( location, contact, and joining date i.e Posted 3 months ago )
// ii. Upload multiple photos in the ad
// iii. Similar Ads below ad details
