import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import { HOME, RESUME } from "./constants/routes";
import UnderMaintenance from "./components/UnderMaintenance";
import flags from "./constants/flags";
import Resume from "./Containers/Resume";

const App = () => (
  <Router>
    <Switch>
      {!flags.underMaintenance && <Route exact path={HOME} component={Home} />}
      {!flags.underMaintenance && <Route exact path={RESUME} component={Resume} />}
      {!flags.underMaintenance && <Route component={Home} />}
      <Route component={UnderMaintenance} />
    </Switch>
  </Router>
);

export default App;
