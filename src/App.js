import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  NavLink as Link,
  Route
} from "react-router-dom";

import loadable from "@loadable/component";

const LoadableHome = loadable(() => import("./Home"));
const LoadableAbout = loadable(() => import("./About"));
const LoadableContact = loadable(() => import("./Contact"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link exact to="/" activeClassName="active">
          Home
        </Link>
        <Link exact to="/about" activeClassName="active">
          About
        </Link>
        <Link exact to="/contact" activeClassName="active">
          Contact
        </Link>
      </div>

      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route exact path="/about" component={LoadableAbout} />
        <Route exact path="/contact" component={LoadableContact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
