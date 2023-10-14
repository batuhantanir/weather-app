import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentWeather = createAsyncThunk(
  "fetchCurrentWeather",
  async (cityName) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}weather?q=${cityName}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    const data = await response.data; 
    return data.result;
  }
);

export const CurrentWeatherSlice = createSlice({
  name: "fetchCurrentWeather",
  initialState: {
    currentWeather: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export const {} = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice.reducer;
