import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HOME, ABOUT, SKILLS, RESUME, CONTACT } from "./constants/routes";
import About from "./pages/About";
import UnderMaintenance from "./components/UnderMaintenance";
import flags from "./constants/flags";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => (
  <Router>
    <Switch>
      {!flags.underMaintenance && <Route exact path={HOME} component={Home} />}
      {!flags.underMaintenance && (
        <Route exact path={ABOUT} component={About} />
      )}
      {!flags.underMaintenance && (
        <Route exact path={SKILLS} component={Skills} />
      )}
      {!flags.underMaintenance && (
        <Route exact path={RESUME} component={Resume} />
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
