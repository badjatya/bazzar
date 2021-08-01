import React from "react";

// Importing react router dom
import { Switch, Route } from "react-router-dom";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";
import ShopPage from "./App/pages/Shop/Shop.page";
import SignInAndSignUpPage from "./App/pages/Signin-signup/Signin-Signup.page";

// Importing Components
import Header from "./App/components/Header/Header.component";

// Importing firebase auth
import { auth, createUserProfileDocument } from "./App/firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
