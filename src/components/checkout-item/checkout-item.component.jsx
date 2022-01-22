import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>

    <span className='product'>
      {name}
      <button className='remove-button'>Remove <span class='remove-icon'>&#10006;</span></button>
    </span>

    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <span className='total'>{price * quantity}</span>
  </div>
);

export default CheckoutItem;