import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "pages/about";
import Home from "pages/home";
import Repos from "pages/repos";
import PageNotFound from "pages/404";
import Projects from "pages/projects";

import Nav from "app/components/molecules/nav";
const Routes: FC = () => {
  return (
    <Router>
      {process.env.NODE_ENV !== "production" ? <Nav /> : null}
      <Switch>
        <Route path="/project/:id" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/repos" component={Repos} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
