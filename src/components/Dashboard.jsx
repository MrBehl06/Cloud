import React,{useContext}  from "react";
import SearchBar from "./SearchBar";
import AirCondition from "./AirCondition";
import Forecast from "./Forecast";
import DaysForeCast from "./DaysForeCast";
import TodayForecast from "./TodayForecast";
import { Context } from "../context/contextApi";
import Loader from "./Loader";
const Dashboard = () => {
  
  const {loading} = useContext(Context)

  if(loading){
    return <Loader/>
  }else{
  return (
    <div className=" h-screen bg-[#dedede] "  >
      <div> {<SearchBar/>} </div>

      <div className="flex items-center justify-evenly mt-14 px-2">
        <div >
          <div className="mt-16 mb-10 "> <TodayForecast/> </div>
          {/* <div className="mb-4"> <Forecast/> </div> */}
          <div> <AirCondition/> </div>
        </div>

        {/* <div>
          <div> <DaysForeCast/> </div>
        </div> */}
      </div>
    </div>
  );
  }
};

export default Dashboard;
