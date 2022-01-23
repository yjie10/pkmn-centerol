import { createSelector } from 'reselect';

// input selector
const selectDirectory = state => state.directory;

export const selectDirectoryCategories = createSelector(
  [selectDirectory],
  (directory) => directory.categories
); 