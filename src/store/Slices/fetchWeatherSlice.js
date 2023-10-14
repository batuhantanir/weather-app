import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentWeather = createAsyncThunk(
  "fetchCurrentWeather",
  async ({ cityName }) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}weather?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    const data = await response.data;
    return data;
  }
);

export const fetchForecastWeather = createAsyncThunk(
  "fetchForecastWeather",
  async ({ coord }) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}forecast?lat=${coord.lat}&lon=${
        coord.lon
      }&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    const data = await response.data;
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "fetchWeather",
  initialState: {
    currentWeather: {},
    forecastWeather: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.currentWeather = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchForecastWeather.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchForecastWeather.fulfilled, (state, action) => {
      state.forecastWeather = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchForecastWeather.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
