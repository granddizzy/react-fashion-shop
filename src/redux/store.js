import {configureStore} from '@reduxjs/toolkit';
import featuredReducer from './feturedSlice';
import catalogReducer from './catalogSlice';
import catalogFilterReducer from './catalogFilterSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    featuredItems: featuredReducer,
    products: catalogReducer,
    cartItems: cartReducer,
    catalogFilter: catalogFilterReducer,
    product: productReducer,
  },
});

export default store;