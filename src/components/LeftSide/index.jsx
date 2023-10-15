import React from "react";
import Search from "../Search/Search";
import TodayWeather from "../TodayWeather";
import LeftSideFooter from "../LeftSideFooter";

const LeftSide = ({ setCityName }) => {
  return (
    <div className="flex flex-col justify-around flex-wrap items-center col-span-2 rounded-br-3xl rounded-tr-3xl bg-[#526D82] w-[20%] p-5 text-white h-screen">
      <Search setCityName={setCityName} />
      <TodayWeather />
      <div>
        <LeftSideFooter />
      </div>
    </div>
  );
};

export default LeftSide;
