import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./Slices/fetchWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
