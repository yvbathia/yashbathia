import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HOME, ABOUT } from "./constants/routes";
import About from "./pages/About";
import UnderMaintance from "./pages/UnderMaintance";
import flags from "./constants/flags";

const App = () => (
  <Router>
    <Switch>
      {console.log(flags)}
      {!flags.underMaintance && <Route exact path={HOME} component={Home} />}

      {!flags.underMaintance && <Route exact path={ABOUT} component={About} />}
      {!flags.underMaintance && <Route component={Home} />}
      <Route component={UnderMaintance} />
    </Switch>
  </Router>
);

export default App;
