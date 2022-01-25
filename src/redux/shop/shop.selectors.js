import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  'plush': 1,
  'figures&pins': 2,
  'game': 3,
  'apparel': 4,
  'accessories': 5,
  'stationery': 6
}

// input selector
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );