import React from 'react'

const Forecast = () => {

  const TodayFore = [
    {
      id:1,
      time:"6:00 AM",
      temp:"22°C"
    },
    {
      id:2,
      time:"9:00 AM",
      temp:"22°C"
    },
    {
      id:3,
      time:"12:00 AM",
      temp:"22°C"
    },{
      id:4,
      time:"3:00 PM",
      temp:"22°C"
    },{
      id:5,
      time:"6:00 PM",
      temp:"22°C"
    },{
      id:6,
      time:"9:00 PM",
      temp:"22°C"
    }
  ]
  return (
    <div className='bg-[#E69C1F]/[0.73] w-[600px] h-[150px] rounded-md'>
      <div className='mb-3  text-center '>
        <h2 className=' px-1 py-1 text-xl text-white font-semibold'>Todays's Forecast</h2>
      </div>
      <div className='flex justify-evenly '>
        {
          TodayFore.map((day)=>{
            return(
           <div className='flex flex-col items-center justify-center mr-3 ml-2 '>
          <span className='text-sm text-white'>{day.time}</span>
          <img src="sun.png" alt="" className='w-[35px] h-[35px]'/>
          <span className='text-sm text-white'>{day.temp}</span>
        </div> 
          )})
          
        }
        
      </div>
    </div>
  )
}

export default Forecast