import './App.css';
import Homepage from "./pages/homepage/homepage.component"
import {Switch, Route} from "react-router-dom"

const Hats = () => (
  <h1>Hats Page</h1>
)
const App = () => {
  return (
    <div className="App">
      <Switch >
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
