import React from "react";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// Importing Logo
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

// Importing Firebase auth
import { auth } from "../../firebase/firebase.utils";

// Importing Styles
import "./Header.styles.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
