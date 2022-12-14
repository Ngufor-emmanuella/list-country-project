import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const countriesInfo = await axios.get('https://restcountries.com/v3.1/all');
  return countriesInfo.data;
});

const fetchSearchDetails = createAsyncThunk('countries/fetchSearchDetails', async (term) => {
const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${term}`);
return dataCountry.data;
});

const fetchDetailsCountry = createAsyncThunk('countries/fetchDetailsCountry', async (name) => {
  const dataCountry = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  return dataCountry.data;
});

const actualState = {
  countries: [],
  choosenCountry: [],
};

const payeeSlice = createSlice({
  name: 'countries',
  actualState,
  reducers: {},
  moreReducers: {
    [fetchCountries.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
    [fetchDetailsCountry.fulfilled]: (state, { payload }) => {
      return { ...state, choosenCountry: payload };
    },
    [fetchSearchDetails.fulfilled]: (state, { payload }) => {
      return { ...state, countries: payload };
    },
  },
});

export {
  fetchCountries, fetchDetailsCountry, fetchSearchDetails,
};

export const getAllCountries = (state) => state.countries.countries;
export const getchoosenCountry = (state) => state.countries.choosenCountry;

export default payeeSlice.reducer;
