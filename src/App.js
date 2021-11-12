import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Page/Home/Home/Home';
import Review from './Page/Home/Review/Review';
import Navigation from './Page/Shared/Navigation/Navigation';
import SecurityCameras from './Page/SecurityCameras/SecurityCameras';
import Login from './Page/Login/Login/Login';
import Registration from './Page/Login/Registration/Registration';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import SecurityCameraItam from './Page/SecurityCameraItam/SecurityCameraItam';
import PlaceOrder from './Page/PlaceOrder/PlaceOrder';
import Dashboard from './Page/DashboardPart/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Navigation></Navigation>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>

          

          <Route path="/security">
          <SecurityCameras></SecurityCameras>
          </Route>
          

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <PrivateRoute path="/order/:id">
            <SecurityCameraItam></SecurityCameraItam>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/registration">
            <Registration></Registration>
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
