import React from "react";
import { useSelector } from "react-redux";
import { dailyWeatherSelector } from "../../redux/Slices/fetchWeatherSlice";
import DailyCard from "../DailyCard";

const DailyCards = () => {
  const dailyWeather = useSelector(dailyWeatherSelector);

  // console.log("daily", dailyWeather);
  return (
    dailyWeather && (
      <div className="flex scale-150 justify-center h-fit rounded bg-[#27374d58] p-5">
        {dailyWeather.map((item) => (
          <DailyCard key={item.dt} item={item} />
        ))}
      </div>
    )
  );
};

export default DailyCards;
