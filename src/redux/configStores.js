import { configureStore } from '@reduxjs/toolkit';
import CountReducer from './configReducers';

const store = configureStore({
  reducer: {
    count: CountReducer,
  },
});

export default store;
