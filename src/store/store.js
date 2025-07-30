import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.js';

// Create store with Redux Toolkit
const store = configureStore({
  reducer: reducer,
  // Redux Toolkit includes thunk middleware by default
  // No need to explicitly add it
});

export default store;