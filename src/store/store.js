import { configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSlice from "./Slices/fetchCurrentWeatherSlice";

export const store = configureStore({
  reducer: {
    currentWeather: CurrentWeatherSlice,
  },
});
