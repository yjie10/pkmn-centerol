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

// removes the item when the 'remove item' button is clicked
export const removeItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

// 不知道有没有写对。。。
export const reduceItem = (cartItems, cartItemToReduce) => {
  // return cartItems.map(cartItem => cartItem.id === cartItemToReduce.id ?
  //   (cartItemToReduce.quantity > 1 ? cartItemToReduce.quantity - 1 : cartItem)
  //   : cartItem)

  if (cartItemToReduce.quantity > 1) {
    return cartItems.map(cartItem => cartItem.id === cartItemToReduce.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  return cartItems;


}