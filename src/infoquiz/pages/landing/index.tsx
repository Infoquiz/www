import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { Landing } from "./components/";
import { SignIn } from "./components/signIn";

export const AppLanding = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signIn" component={SignIn} />
      </Switch>
    </Router>
  );
};
