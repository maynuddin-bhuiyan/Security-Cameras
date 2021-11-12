import {Route,Redirect} from "react-router-dom";
import React from 'react';
import useAuth from "../../../Hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();
    return (
        <Route
      {...rest}
      render={({ location }) =>
      user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;