import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import { HOME } from "./constants/routes";
import UnderMaintenance from "./components/UnderMaintenance";
import flags from "./constants/flags";

const App = () => (
  <Router>
    <Switch>
      {!flags.underMaintenance && <Route exact path={HOME} component={Home} />}
      {!flags.underMaintenance && <Route component={Home} />}
      <Route component={UnderMaintenance} />
    </Switch>
  </Router>
);

export default App;
