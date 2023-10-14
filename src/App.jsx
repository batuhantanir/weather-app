import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "./store/Slices/fetchWeatherSlice";
import Search from "./components/Search/Search";

function App() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("ankara");

  const currentWeather = useSelector(
    (state) => state.weather.currentWeather
  );
  const forecastWeather = useSelector(
    (state) => state.weather.forecastWeather
  );
  console.log("forecast",forecastWeather);
  console.log("current",currentWeather);
  useEffect(() => {
    dispatch(fetchCurrentWeather({ cityName }));
    dispatch(fetchForecastWeather({ coord: currentWeather.coord }));
  }, [dispatch, cityName]);

  return (
    <div>
      <Search setCityName={setCityName} />
    </div>
  );
}

export default App;
