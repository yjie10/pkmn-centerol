import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name.length < 25 ? name : `${name.slice(0, 25)}...`}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
);

export default CartItem;