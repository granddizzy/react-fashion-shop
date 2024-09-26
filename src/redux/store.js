import {configureStore} from '@reduxjs/toolkit';
import featuredReducer from './feturedSlice';
import catalogReducer from './catalogSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    featuredItems: featuredReducer,
    catalogItems: catalogReducer,
    cartItems: cartReducer,
  },
});

export default store;