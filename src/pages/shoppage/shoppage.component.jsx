import React, { Component } from 'react';

import SHOP_DATA from './shoppage.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(collection => <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />)
        }
      </div>
    )
  }
}

export default ShopPage;