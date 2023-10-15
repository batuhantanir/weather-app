import React from "react";
//icons
import { BiWind } from "react-icons/bi";
import { BsFillCloudsFill } from "react-icons/bs";
import { WiBarometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

const TodayDetails = ({ currentWeather }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      <div className="bg-[#9DB2BF] flex flex-col items-center justify-center w-20 h-20">
        <div className="text-2xl">
          <BiWind />
        </div>
        <div>
          {(currentWeather.wind.speed * 3.6).toString().slice(0, 3)}{" "}
          <span> KM/H</span>
        </div>
      </div>
      <div className="bg-[#9DB2BF] flex flex-col items-center justify-center w-20 h-20">
        <div className="text-2xl">
          <WiHumidity />
        </div>
        <div>{currentWeather.main.humidity}%</div>
      </div>
      <div className="bg-[#9DB2BF] flex flex-col items-center justify-center w-20 h-20">
        <div className="text-2xl">
          <WiBarometer />
        </div>
        <div>{currentWeather.main.pressure} hPa</div>
      </div>
      <div className="bg-[#9DB2BF] flex flex-col items-center justify-center w-20 h-20">
        <div className="text-2xl">
          <BsFillCloudsFill />
        </div>
        <div>{currentWeather.clouds.all}%</div>
      </div>
    </div>
  );
};

export default TodayDetails;
