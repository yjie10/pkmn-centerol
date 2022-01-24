import React from 'react';
import { connect } from 'react-redux';

// import collectionItem from '../../components/collection-item/collection-item.component';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
    </div>)
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);