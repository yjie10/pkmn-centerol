import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// takes in selectCartItems as the Count replies on the CartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartGrandTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumalatedPrice, cartItem) =>
    accumalatedPrice + (cartItem.quantity * cartItem.price), 0).toFixed(2)
)