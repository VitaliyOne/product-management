import { createSelector } from 'reselect';
import { type ProductsState } from './types';
import { type RootState } from '../..';

const selectProducts = (state: RootState) => state.products;

export const selectMemoizedProducts = createSelector(
  selectProducts,
  (products: ProductsState) => products.products
);

export const selectSortedProducts = createSelector(selectMemoizedProducts, (products) => {
  return [...products].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
});
