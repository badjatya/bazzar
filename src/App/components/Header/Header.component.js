import React from "react";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// Importing Logo
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

// Importing Firebase auth
import { auth } from "../../firebase/firebase.utils";

// Importing redux state
import { connect } from "react-redux";

// Importing Components
import CartIcon from "./../Cart-Icon/CartIcon.component";
import CartDropdown from "./../Cart-Dropdown/CartDropdown.component";

// Importing Styles
import "./Header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>

      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
