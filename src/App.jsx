import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import { HOME, RESUME, PORTFOLIO, CONTACT } from "./constants/routes";
import UnderMaintenance from "./components/UnderMaintenance";
import flags from "./constants/flags";
import Resume from "./Containers/Resume";
import Portfolio from "./Containers/Portfolio";
import Contact from "./Containers/Contact";

const App = () => (
  <Router>
    <Switch>
      {!flags.underMaintenance && <Route exact path={HOME} component={Home} />}
      {!flags.underMaintenance && (
        <Route exact path={RESUME} component={Resume} />
      )}
      {!flags.underMaintenance && (
        <Route exact path={PORTFOLIO} component={Portfolio} />
      )}
      {!flags.underMaintenance && (
        <Route exact path={CONTACT} component={Contact} />
      )}
      {!flags.underMaintenance && <Route component={Home} />}
      <Route component={UnderMaintenance} />
    </Switch>
  </Router>
);

export default App;
