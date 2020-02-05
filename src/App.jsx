import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HOME, ABOUT } from "./constants/routes";
import About from "./pages/About";
import UnderMaintenance from "./pages/UnderMaintenance";
import flags from "./constants/flags";

const App = () => (
  <Router>
    <Switch>
      {!flags.underMaintenance && <Route exact path={HOME} component={Home} />}
      {!flags.underMaintenance && <Route exact path={ABOUT} component={About} />}
      {!flags.underMaintenance && <Route component={Home} />}
      <Route component={UnderMaintenance} />
    </Switch>
  </Router>
);

export default App;
