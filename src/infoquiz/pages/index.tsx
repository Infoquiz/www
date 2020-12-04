import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import { Landing } from "./landing";
import { Login } from "./login";
import { Register } from "./register";
import { LevelChoice } from "./level_choice";
import { Level } from "./level";

export const AppLanding = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/levelChoice" component={LevelChoice} />
        <Route exact path="/level/:level" component={Level} />
      </Switch>
    </Router>
  );
};
