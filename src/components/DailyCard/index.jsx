import React from "react";

const DailyCard = ({ item }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="flex flex-col items-center px-2 py-5 m-1 h-fit bg-[#DDE6ED] rounded">
      <div className="text-lg font-semibold">
        {new Date((item.dt - 10800) * 1000).getDay() - 1 !== -1
          ? days[new Date((item.dt - 10800) * 1000).getDay() - 1]
          : "Today"}
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt=""
      />
      <div className="flex items-center justify-center font-bold text-base">
        <div>
          {Math.ceil(item.main.temp_max)}
          <sup>o</sup>C
        </div>
        <div>-</div>
        <div className="text-[#00000082]">
          {Math.floor(item.main.temp_max)}
          <sup>o</sup>C
        </div>
      </div>
    </div>
  );
};

export default DailyCard;
