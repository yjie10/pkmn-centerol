import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkoutpage.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>

      <div className='header-block'>
        <span>Quantity</span>
      </div>

      <div className='header-block'>
        <span>Price</span>
      </div>

      <div className='header-block'>
        <span>Total</span>
      </div>
    </div>
    {cartItems.map(cartItem =>
      <div>{cartItem.name}
        <span>{cartItem.price * cartItem.quantity}</span>
      </div>)}


    <div className='total'><span>TOTAL: ${total}</span></div>


  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
}
)

export default connect(mapStateToProps)(CheckoutPage);