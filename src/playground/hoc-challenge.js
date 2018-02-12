import React from 'react';
import ReactDOM from 'react-dom';

// challenge
// Create a HOC component that checks if user is logged in and renders info page.

const Info = (props) => (
  <div>
      <h1>Info</h1>
      <p>{props.info}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
          {
              props.isAuthenticated ? 'You are logged in' : 'You must login to begin'
          }
          {
              props.isAuthenticated &&
              <WrappedComponent {...props} />
          }
      </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Welcome to the login screen" />, document.getElementById('app'));