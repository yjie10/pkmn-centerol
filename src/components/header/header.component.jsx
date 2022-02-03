import React from 'react';

// redux / selectors
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// firebase
import { auth } from '../../firebase/firebase.utils';

// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// styled-components
import {
  HeaderContainer,
  LogoContainer,
  LogoStyles,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <LogoStyles />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      {/* <Link className='option' to='/contact'>CONTACT</Link> */}
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
          :
          <OptionLink to='/signin'>Sign In</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);