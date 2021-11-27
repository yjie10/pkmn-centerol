import React, { Component } from 'react';

import SHOP_DATA from './shoppage.data'

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div>
        Shop Page
      </div>
    )
  }
}

export default ShopPage;