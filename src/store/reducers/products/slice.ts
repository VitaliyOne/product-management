import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import {
  fetchProductsFromServer,
  createProductOnServer,
  updateProductOnServer,
  deleteProductOnServer
} from './api';
import { type ProductCreateFormData } from './types';
import type { Product } from '../../../types';

export const fetchProducts = createAsyncThunk(`${REDUCER_PATH}/fetchProducts`, async () => {
  return fetchProductsFromServer();
});

export const addProduct = createAsyncThunk(
  `${REDUCER_PATH}/addProduct`,
  async (product: ProductCreateFormData) => {
    return createProductOnServer(product);
  }
);

export const updateProduct = createAsyncThunk(
  `${REDUCER_PATH}/updateProduct`,
  async (product: Product) => {
    return updateProductOnServer(product);
  }
);

export const removeProduct = createAsyncThunk(
  `${REDUCER_PATH}/removeProduct`,
  async (productId: string) => {
    await deleteProductOnServer(productId);
    return productId;
  }
);

const productsSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const productToAdd: Product = action.payload;
      state.products.unshift(productToAdd);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    });
  }
});

export default productsSlice.reducer;
