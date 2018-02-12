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
              props.isAuthenticated ? (
                  <WrappedComponent {...props} />
              ) : (
                  <div>Please login to view the info</div>
              )
          }
      </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated info="Welcome to the login screen" />, document.getElementById('app'));