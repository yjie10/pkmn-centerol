import { createSelector } from 'reselect';

// input selector
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

