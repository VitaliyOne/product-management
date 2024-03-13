import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import productsReducer, { fetchProducts } from './reducers/products/slice';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

store.dispatch(fetchProducts());

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
