import { type SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE, REDUCER_PATH } from './const';
import { type ProductCreatePayload } from './types';
import type { Product } from '../../../types';

export const getProducts = createAsyncThunk<Product[], void, { rejectValue: SerializedError }>(
  `${REDUCER_PATH}/fetchProducts`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/productTypes`);
      const products = await response.json();
      return products;
    } catch (error) {
      return rejectWithValue(error as SerializedError);
    }
  }
);

export const addProduct = createAsyncThunk<
  Product,
  ProductCreatePayload,
  { rejectValue: SerializedError }
>(`${REDUCER_PATH}/addProduct`, async (newProduct, { rejectWithValue }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/productTypes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error as SerializedError);
  }
});

export const updateProduct = createAsyncThunk<Product, Product, { rejectValue: SerializedError }>(
  `${REDUCER_PATH}/updateProduct`,
  async (product, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, createdAt, ...editProduct } = product;
      const response = await fetch(`${import.meta.env.VITE_API_URL}/productTypes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editProduct)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error as SerializedError);
    }
  }
);

export const removeProduct = createAsyncThunk<string, string, { rejectValue: SerializedError }>(
  `${REDUCER_PATH}/deleteProduct`,
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/productTypes/${productId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Ошибка удаления продукта');
      }
      return productId;
    } catch (error) {
      return rejectWithValue(error as SerializedError);
    }
  }
);

const productsSlice = createSlice({
  name: REDUCER_PATH,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      const productToAdd = action.payload;
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
