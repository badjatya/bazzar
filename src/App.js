import React from "react";

// Importing react router dom
import { Switch, Route } from "react-router-dom";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";
import ShopPage from "./App/pages/Shop/Shop.page";

// Importing Components
import Header from "./App/components/Header/Header.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
