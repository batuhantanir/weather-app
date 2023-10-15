import React from "react";
import { useSelector } from "react-redux";
import { dailyWeatherSelector } from "../../redux/Slices/fetchWeatherSlice";
import DailyCard from "../DailyCard";

const DailyCards = () => {
  const dailyWeather = useSelector(dailyWeatherSelector);

  console.log("daily", dailyWeather);
  return (
    dailyWeather && (
      <div className="flex justify-center ">
        {dailyWeather.map((item) => (
          <DailyCard key={item.dt} item={item} />
        ))}
      </div>
    )
  );
};

export default DailyCards;
