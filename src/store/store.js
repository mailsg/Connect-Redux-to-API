import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

// Use configureStore and pass it an object with a reducer, which should take users reducer
// Export the store as default

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
