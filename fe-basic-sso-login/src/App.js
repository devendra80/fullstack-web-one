import React, { useContext, useEffect, useState } from 'react';
import KeycloakContext from './KeycloakContext';

function App() {
  const [message, setMessage] = useState('');
  const accessToken = useContext(KeycloakContext);

  useEffect(() => {
    fetch('http://localhost:9080/api/hello', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }) // replace with your Spring Boot application's URL
      .then(response => response.text())
      .then(setMessage);
  //}, []);
});

  return (
    <div className="App">
      <header className="App-header">
        <h1>SSO integration with Keycloak</h1>
        <p>{message}</p>
        {/* put your code */}
      </header>
    </div>
  );
}

export default App;