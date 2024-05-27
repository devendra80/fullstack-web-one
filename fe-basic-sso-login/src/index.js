import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Keycloak from 'keycloak-js';
import KeycloakContext from './KeycloakContext';

//keycloak init options
let initOptions = {
    url: 'https://127.0.0.1:8443/auth', realm: 'keycloak-demo', clientId: 'react-test-app', onLoad: 'login-required'
}


const keycloak = new Keycloak({
  //url: 'http://localhost:8080/auth',
  url: 'http://localhost:8080',
  realm: 'myrealm',
  clientId: 'react-test-app',
});

//let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad })
  .then((auth) => {
    if (!auth) {
      window.location.reload();
    } else {
      console.log("Authenticated ", keycloak);

      // Display the token
      //console.log("Token: ", keycloak.token);
      //console.log("Token: ", keycloak.refreshToken);

      // Display the name of the logged-in user
      console.log("User name: ", keycloak.tokenParsed.preferred_username);

    }

    // Old way
// ReactDOM.render(<App />, document.getElementById('root'));

// New way
const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    <KeycloakContext.Provider value={keycloak.token}>
    <App />
  </KeycloakContext.Provider>,
  //document.getElementById('root')
);
}
    // Check token validity every minute
    setInterval(() => {
      keycloak.updateToken(70).then((refreshed) => {
        if (refreshed) {
          console.log('Token refreshed' + refreshed);
        } else {
          console.log('Token not refreshed, valid for ' + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).catch(() => {
        console.log('Failed to refresh token');
      });
    }, 60000);
  }).catch(() => {
    console.log("Authenticated Failed");
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
