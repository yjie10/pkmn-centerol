import { createSelector } from 'reselect';

// input selector
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );