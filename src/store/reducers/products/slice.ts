import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { fetchProductsFromServer } from './api';
import { type AppThunk } from './types';
import { type Product } from '../../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.unshift(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    }
  }
});

export const { setProducts, addProduct, updateProduct, removeProduct } = productsSlice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    const products: Product[] = await fetchProductsFromServer();
    dispatch(setProducts(products));
  } catch (error) {
    console.log(error);
  }
};

export default productsSlice.reducer;
