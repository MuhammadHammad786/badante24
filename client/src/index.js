import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render((
  <BrowserRouter>
    <Auth0Provider
      domain="dev-fnafl1gh.us.auth0.com"
      clientId="1Ph0E0RFseXSSN1mQyqB0QDSIZ7tl8nf"
      redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
  </BrowserRouter>

), document.getElementById('root'));

