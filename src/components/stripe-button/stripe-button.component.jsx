import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import ReactLogo from '../../assets/pkball.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KN3faFyU7HYUKrQK0Ml7UZRFdXtdnaH3QcpqraSds754IG1tQNEVT9ldhiwbXq4ei1yOf1rDT1l8xh1Gd75M72j00j649BKhU';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='PKMN Center OL Co. '
      billingAddress
      shippingAddress
      image={ReactLogo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;