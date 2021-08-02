import React from "react";

// Importing redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

// Importing Icon
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopIcon.svg";

// Importing Styles
import "./CartIcon.style.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
