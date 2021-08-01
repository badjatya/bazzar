import React from "react";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// Importing Logo
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

// Importing Styles
import "./Header.styles.scss";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
