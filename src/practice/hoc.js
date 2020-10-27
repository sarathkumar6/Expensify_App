console.log("Hello I am Higher Order Component");
import React from "react";
import ReactDOM from "react-dom";

const NameComponent = props => {
  return (
    <div>
      <h2>Welcome to Name Component</h2>
      <p>Hello {props.name}!!!</p>
    </div>
  );
};

const nameComponentWrapper = TranscludedComponent => {
  return props => {
    return (
      <div>
        <TranscludedComponent {...props}></TranscludedComponent>
        <p>Thanks for being a prime user</p>
      </div>
    );
  };
};

const requireAuth = TranscludedComponent => {
  return props => {
    return (
      <div>
        <TranscludedComponent {...props}></TranscludedComponent>
        {
            props.isAuthenticated ? 
            <p>Your last login was yesterday</p> : 
            <p>Please login to view your last login</p>
        }
      </div>
    );
  };
};
const PrimeUser = nameComponentWrapper(NameComponent);

const AuthUser = requireAuth(NameComponent);

//ReactDOM.render(<PrimeUser name="Sarath Kumar Nagaraj"></PrimeUser>, document.getElementById('app'));
ReactDOM.render(
  <AuthUser isAuthenticated={false} name="Sarath Kumar Nagaraj"></AuthUser>,
  document.getElementById("app")
);
