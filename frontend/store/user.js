import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    }
  },
});

export const { addUsers, clearUsers } = user.actions;

export default user.reducer;