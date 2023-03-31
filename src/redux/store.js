// Import necessary dependencies
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

// Configure the store with the greetingReducer
const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

// Export the store as a default export
export default store;
