import React from "react";
import { currentWeatherSelector } from "../../redux/Slices/fetchWeatherSlice";
import { useSelector } from "react-redux";
import TodayDetails from "../TodayDetails";

const TodayWeather = () => {
  const currentWeather = useSelector(currentWeatherSelector);

  console.log("current", currentWeather);
  return (
    currentWeather.length != 0 && (
      <div className="flex flex-col items-center my-5 w-[90%] ">
        <h2 className="font-semibold text-xl">
          {currentWeather.name}, {currentWeather.sys.country}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt=""
        />
        <div>{currentWeather.weather[0].description}</div>
        <div className="text-4xl font-semibold">
          {Math.floor(currentWeather.main.temp)}
          <sup>o</sup>C
        </div>
        <div>
          {Math.floor(currentWeather.main.temp_max)}
          <sup>o</sup>C / {Math.floor(currentWeather.main.temp_min)}
          <sup>o</sup>C
        </div>
        <TodayDetails currentWeather={currentWeather} />
      </div>
    )
  );
};

export default TodayWeather;
