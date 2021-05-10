import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render((
  <BrowserRouter>
    <Auth0Provider
      domain="dev-vsrz435r.us.auth0.com"
      clientId="DwfRo0Pjcr96pCIZRXQhR46dgZl3GIqe"
      redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
  </BrowserRouter>

), document.getElementById('root'));

