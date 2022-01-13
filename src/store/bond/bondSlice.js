import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBonds } from '../../services/bondService';
import { LOADING_STATUSES } from './constants';

export const getBonds = createAsyncThunk(
    'bond/fetchBonds',
    async (token) => {
      const response = await fetchBonds(token);
      return response?.data;
    },
);

const bondSlice = createSlice({
  name: 'bond',
  initialState: {
    currentBond: null,
    bonds: [],
    status: 'idle',
  },
  reducers: {
    setBond(state, action) {
      state.currentBond = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBonds.pending, (state) => {
      state.status = LOADING_STATUSES.loading;
    }).addCase(getBonds.fulfilled, (state, action) => {
      state.status = LOADING_STATUSES.idle;
      state.bonds = action.payload;
    });
  },
});

export const { setBond } = bondSlice.actions;

export default bondSlice.reducer;
