import React from "react";

// Importing redux
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

// Importing Icon
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopIcon.svg";

// Importing Styles
import "./CartIcon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
