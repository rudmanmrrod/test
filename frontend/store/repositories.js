import { createSlice } from '@reduxjs/toolkit';

export const repositories = createSlice({
  name: 'repositories',
  initialState: {
    repositories: [],
  },
  reducers: {
    addRepositories: (state, action) => {
      state.repositories = action.payload;
    },
    clearRepositories: (state) => {
      state.repositories = [];
    }
  },
});

export const { addRepositories, clearRepositories } = repositories.actions;

export default repositories.reducer;