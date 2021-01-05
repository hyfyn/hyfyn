import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Repos from "pages/repos";
import Projects from "pages/projects";
import PageNotFound from "pages/404";
const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id">
          <Projects />
        </Route>
        <Route path="/repos">
          <Repos />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
