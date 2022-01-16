export const addItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // if the item exist, we return a new array with the item quantity + 1
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
  }

  // otherwise, we add the item to the cart and give it a base quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}