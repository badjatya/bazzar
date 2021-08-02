import React from "react";

// Importing react router dom
import { Switch, Route, Redirect } from "react-router-dom";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";
import ShopPage from "./App/pages/Shop/Shop.page";
import SignInAndSignUpPage from "./App/pages/Signin-signup/Signin-Signup.page";
import CheckoutPage from "./App/pages/Checkout/Checkout.page";

// Importing Components
import Header from "./App/components/Header/Header.component";

// Importing firebase auth
import { auth, createUserProfileDocument } from "./App/firebase/firebase.utils";

// Importing Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./App/redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./App/redux/user/user.selectors";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
