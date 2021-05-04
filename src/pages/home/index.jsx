import React from "react";
import Login from "../../components/Login";
import Register from "../../components/register";
import Welcome from "../welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckIn from "../checkin";
import MyAccount from "../myAccount";

const Home = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/checkIn" component={CheckIn} />
          <Route exact path="/myAccount" component={MyAccount} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
