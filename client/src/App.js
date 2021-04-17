import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes,Switch,Route } from 'react-router-dom';
import './adminPanel/mixins/chartjs';
import Home from './containers/Home/index.jsx';
import Posting_form from'./containers/post_ad/index.jsx';
import Ad_detail from './containers/ad_detail/index.jsx'; 
import Signin from './containers/Login/index.jsx'; 
import Profile from './containers/profile/index.jsx'; 
import Signup from './containers/Signup/index.jsx'; 
import Dashboard from './adminPanel/pages/Dashboard';
import CustomerList from './adminPanel/pages/CustomerList';       
import SettingsView from './adminPanel/pages/Settings';       
import Ads from './adminPanel/pages/Ads';       
import { Fragment,React } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {

  const { user, isAuthenticated } = useAuth0();
  
  if(isAuthenticated)
  {
    sessionStorage.setItem("user_id", user.sub);
    sessionStorage.setItem("user_pic", user.picture);
  }
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post_ad" component={Posting_form} />
          <Route path="/ad_detail/:id" component={Ad_detail} />
          <Route path="/profile/:user_id" component={Profile} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/adminPanel" component={Dashboard} />
          <Route exact path="/adminPanel/customers" component={CustomerList} />
          <Route exact path="/adminPanel/settings" component={SettingsView} />
          <Route exact path="/adminPanel/ads" component={Ads} />
        </Switch>
      </div>
  );
};

export default App;
