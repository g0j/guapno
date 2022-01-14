import { createSlice } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    open: false,
    content: '',
  },
  reducers: {
    setMessage(state, action) {
      const content = action.payload;
      state.content = content;
      state.open = !isEmpty(content);
    },
    hideMessage(state) {
      state.content = '';
      state.open = false;
    },
  },
});

export const { setMessage, hideMessage } = messageSlice.actions;

export default messageSlice.reducer;
