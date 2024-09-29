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
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    increaseCount: (state, action) => {
      const item = state.items[action.payload];
      if (item.count < 10) {
        item.count++;
        state.totalPrice = parseFloat((state.totalPrice + item.price).toFixed(2));
        state.totalCount++;
      }
    },
    decreaseCount: (state, action) => {
      const item = state.items[action.payload];
      if (item.count > 1) {
        item.count--;
        state.totalPrice = parseFloat((state.totalPrice - item.price).toFixed(2));
        state.totalCount--;
      }
    },
    setCount: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const item = state.items[itemIndex];
      state.totalPrice = parseFloat((state.totalPrice - item.price * item.count).toFixed(2));
      state.totalCount = state.totalCount - item.count;
      item.count = action.payload.count;
      state.totalPrice = parseFloat((state.totalPrice + item.price * item.count).toFixed(2));
      state.totalCount = state.totalCount + item.count;
    },
    setSelectedColor: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const item = state.items[itemIndex];
      item.selectedColor = action.payload.selectedColor;
    },
    setSelectedSize: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const item = state.items[itemIndex];
      item.selectedSize = action.payload.selectedSize;
    },
  }
});

export const {
  setCount,
  delProductByCartID,
  increaseCount,
  decreaseCount,
  clearCart,
  addProduct,
  delProduct,
  setSelectedColor,
  setSelectedSize
} = cartSlice.actions;
export default cartSlice.reducer;