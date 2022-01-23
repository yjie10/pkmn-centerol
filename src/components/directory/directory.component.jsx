import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';
import { selectDirectoryCategories } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ categories }) => (
  <div className='directory-menu'>
    {
      categories.map(({ id, ...otherCategoryProps }) => <MenuItem key={id} {...otherCategoryProps} />)
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(Directory);