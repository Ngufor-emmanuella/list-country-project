/* eslint-disable arrow-body-style */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk('count/fetchCountries', async () => {
  const countriesInfo = await axios.get('https://restcountries.com/v3.1/all');
  return countriesInfo.data;
});

const fetchSearchDetails = createAsyncThunk('count/fetchSearchDetails', async (file) => {
  const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${file}`);
  return dataCountry.data;
});

const fetchDetailsCountry = createAsyncThunk('count/fetchDetailsCountry', async (name) => {
  const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return dataCountry.data;
});

const initialState = {
  count: [],
  choosenCountry: [],
};

const payeeSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  moreReducers: {
    [fetchCountries.fulfilled]: (state, { payload }) => ({ ...state, count: payload }),
    [fetchSearchDetails.fulfilled]: (state, { payload }) => ({ ...state, count: payload }),
    // eslint-disable-next-line max-len
    [fetchDetailsCountry.fulfilled]: (state, { payload }) => ({ ...state, choosenCountry: payload }),
  },
});

export {
  fetchCountries, fetchDetailsCountry, fetchSearchDetails,
};

export const getAllCountries = (state) => state.count.count;
export const getchoosenCountry = (state) => state.count.choosenCountry;

export default payeeSlice.reducer;
