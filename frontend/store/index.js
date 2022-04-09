import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import repositoriesReducer from './repositories';

export default configureStore({
  reducer: {
    user: userReducer,
    repositories: repositoriesReducer
  },
});