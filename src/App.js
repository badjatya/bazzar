import './App.css';
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
