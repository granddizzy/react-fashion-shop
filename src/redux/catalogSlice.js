import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatalogItems = createAsyncThunk(
  'catalog/fetchCatalogItems',
  async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`)
      }
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalogItems.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchCatalogItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;
