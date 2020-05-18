import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

export const AppLanding = () => {
  const history = createHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <div>infoquiz</div>} />
      </Switch>
    </Router>
  );
};
