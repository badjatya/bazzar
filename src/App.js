import React from "react";

// Importing react router dom
import { Switch, Route } from "react-router-dom";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";

import "./App.css";

const Hatspage = () => {
  return <h1>Hats</h1>;
};

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/hats" component={Hatspage} />
    </Switch>
  );
};

export default App;
