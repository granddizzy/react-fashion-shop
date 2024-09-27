import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // const item = state.items.find(item => item.id === action.payload.id
      //   && item.size === action.payload.size && item.type === action.payload.type);

      const item = state.items.find(item => item.id === action.payload.id);

      if (item) {
        item.count++;
        state.totalPrice = parseFloat((state.totalPrice + action.payload.price).toFixed(2));
      } else {
        state.items.push({...action.payload, count: 1});
        state.totalPrice = parseFloat((state.totalPrice + action.payload.price).toFixed(2));
      }
      state.totalCount++;
      // saveCartState(state);
    },
    delProduct: (state, action) => {
      // const itemIndex = state.items.findIndex(item => item.id === action.payload.id
      //   && item.size === action.payload.size && item.type === action.payload.type);

      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex > -1) {
        const item = state.items[itemIndex];
        state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2));
        if (item.count > 1) {
          item.count--;
        } else {
          state.items.splice(itemIndex, 1);
        }
        state.totalCount--;
        // saveCartState(state);
      }
    },
    delProductByCartID: (state, action) => {
      const itemToDelete = state.items[action.payload];
      // if (itemToDelete) {
      //state.items = state.items.filter(item => item.id !== action.payload);
      state.items.splice(action.payload, 1);
      state.totalPrice = parseFloat((state.totalPrice - itemToDelete.price * itemToDelete.count).toFixed(2));
      // }
      state.totalCount = state.totalCount - itemToDelete.count;
      // saveCartState(state);
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      // saveCartState(state);
    },
    increaseCount: (state, action) => {
      const item = state.items[action.payload];
      if (item.count < 10) {
        item.count++;
        state.totalPrice = parseFloat((state.totalPrice + item.price).toFixed(2));
        state.totalCount++;
        // saveCartState(state);
      }
    },
    decreaseCount: (state, action) => {
      const item = state.items[action.payload];
      if (item.count > 1) {
        item.count--;
        state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2));
        state.totalCount--;
        // saveCartState(state);
      }
    },
  }
});

export const {delProductByCartID, increaseCount, decreaseCount, clearCart, addProduct, delProduct} = cartSlice.actions;
export default cartSlice.reducer;
