import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>

      <span className='product'>
        {name}
        <button className='remove-button' onClick={() => removeItem(cartItem)}>
          Remove <span className='remove-icon'>&#10006;</span>
        </button>
      </span>

      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='total'>{price * quantity}</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
// export default CheckoutItem;
