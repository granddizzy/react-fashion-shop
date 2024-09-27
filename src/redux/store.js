import {configureStore} from '@reduxjs/toolkit';
import featuredReducer from './feturedSlice';
import catalogReducer from './catalogSlice';
import catalogFilterReducer from './catalogFilterSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    featuredItems: featuredReducer,
    catalogItems: catalogReducer,
    cartItems: cartReducer,
    catalogFilter: catalogFilterReducer,
  },
});

export default store;