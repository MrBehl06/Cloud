import React,{useContext,useEffect,useState} from "react";

import { Context } from '../context/contextApi'
const TodayForecast = () => {
  const {data,wea,time} = useContext(Context);
  return (
    <div className="flex  flex-col  items-center ">
      <div className=" text-center" >
        <h2  className="text-xl text-black mb-3 italic">{time.slice(0,25)}</h2>
        <h2 className="text-7xl text-[#E69C1F] drop-shadow-sm mb-3 ">{Math.trunc(data.main.temp) }°C</h2>
        <h2 className="text-2xl  text-black mb-3">{wea.description}</h2>
        <h2 className="text-xl text-black mb-3">{data.name}</h2>
      </div>
    </div>
  );
};

export default TodayForecast;
