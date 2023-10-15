import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentWeatherSelector,
  fetchCurrentWeather,
  fetchDailyWeather,
  dailyWeatherSelector,
} from "./redux/Slices/fetchWeatherSlice";
import Search from "./components/Search/Search";
import LeftSide from "./components/LeftSide";
import Body from "./components/Body";

function App() {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("ankara");
  const [coord, setCoord] = useState({ lon: 32.8543, lat: 39.9199 });

  const currentWeather = useSelector(currentWeatherSelector);
  // const dailyWeather = useSelector(dailyWeatherSelector);
  // console.log("forecast", forecastWeather);
  // console.log("current", currentWeather);

  useEffect(() => {
    dispatch(fetchCurrentWeather({ cityName }));
    setCoord(currentWeather.coord);
    dispatch(fetchDailyWeather({ coord }));
  }, [dispatch, cityName, coord]);

  return (
    <div className="flex flex-col">
      <Search setCityName={setCityName} />
      <div className="grid grid-cols-12 gap-1">
        <LeftSide />
        <Body />
      </div>
    </div>
  );
}

export default App;
