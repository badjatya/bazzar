// Importing Cart types
import CartActionTypes from "./cart.types";

// For toggling the dropdown
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// For adding the items in cart
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
