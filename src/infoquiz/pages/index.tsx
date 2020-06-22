import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import { Landing } from "./landing";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { LevelChoice } from "./level-choice";
import { Level } from "./level";

export const AppLanding = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/levelChoice" component={LevelChoice} />
        <Route exact path="/level" component={Level} />
      </Switch>
    </Router>
  );
};
