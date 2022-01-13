import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchToken } from '../../services/authService';

export const getToken = createAsyncThunk(
    'auth/fetchToken',
    async () => {
      const response = await fetchToken();
      return response?.data;
    },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export default authSlice.reducer;
