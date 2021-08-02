import React from "react";

// Importing Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// Importing Components
import CustomButton from "../Custom-Button/CustomButton.component";
import CartItem from "../Cart-Item/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
