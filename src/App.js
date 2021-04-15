import React from 'react'
import {Switch, Route} from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import './App.css';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null,
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user);
    } )

    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch >
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
