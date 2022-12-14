import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './configReducers';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;