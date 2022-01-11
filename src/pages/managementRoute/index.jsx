import React from "react";
import Login from "../../components/Login";
import Register from "../../components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyAccount from "../myAccount";
import Dashboard from "../dashboard";
import Welcome from "../welcome";
import Home from "../home";
import Upload from "../../components/upload";
import Header from "../../components/header";
import RegisterContainer from "../../components/register-conteiner";

const ManagementRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={RegisterContainer} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/myAccount" component={MyAccount} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Upload exact path="/upload" component={Upload} />
        </Switch>
      </Router>
    </>
  );
};

export default ManagementRoute;
