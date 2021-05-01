import React from "react";
import Header from "../../components/header";
import Login from "../../components/Login";
import Register from "../../components/register";
import Welcome from "../../components/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckIn from "../checkin";

const Home = () => {
  return (
    <div>
      <Router>
        <div style={{ marinTop: "30px", position: "sticky", top: 0 }}>
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/checkIn" component={CheckIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
