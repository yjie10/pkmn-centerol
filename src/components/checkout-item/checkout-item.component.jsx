import React from 'react';
import { connect } from 'react-redux';

import { removeItem, addItem, reduceItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

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

      <span className='quantity'>
        <div className={`${quantity > 1 ? '' : 'last-item'} left-arrow`} onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='right-arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>

      <span className='price'>${price}</span>
      <span className='total'>${(price * quantity).toFixed(2)}</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(reduceItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);