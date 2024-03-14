import { type ThunkAction } from '@reduxjs/toolkit';
import { type Action } from 'redux';
import { type Product } from '../../../types';
import { type RootState } from '../..';

export interface ProductsState {
  products: Product[];
}

export type ProductCreateFormData = Omit<Product, 'id' | 'createdAt'>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
