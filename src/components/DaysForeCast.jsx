import React from 'react'
import { useEffect } from 'react'
const DaysForeCast = () => {

  const daysForecast = [
    {
      id:1,
      day:"Today's",
      ratio:"23/36"
    },
    {
      id:2,
      day:"Tueday",
      ratio:"23/36"
    },
    {
      id:3,
      day:"Wednesday's",
      ratio:"23/36"
    },
    {
      id:4,
      day:"Thursday",
      ratio:"23/36"
    },
    {
      id:5,
      day:"Friday",
      ratio:"23/36"
    },
    {
      id:6,
      day:"Saturday",
      ratio:"23/36"
    },
    {
      id:7,
      day:"Sunday",
      ratio:"22/36"
    },
    
  ]
  return (
    <div className='bg-[#E69C1F]/[0.73] w-[400px] h-[600px] rounded-md '>
      <div className='mb-3  mt-2 text-center '>
        <h2 className=' px-1 py-1 text-xl text-white font-semibold'>7-Day Forecast</h2>
      </div>
      <div className='flex flex-col'>
        {
          daysForecast.map((item)=>{
            return(
           <div className='flex justify-evenly mt-10 '>
            <div className='w-[55px]'>
          <span className='text-sm text-white'>{item.day}</span>
          </div>
          <div>
          <img src="sun.png" alt="" className='w-[35px] h-[35px]'/>
          </div>
          <div>
          <span className='text-sm text-white'>{item.ratio}</span>
          </div>
        </div> 
          )})
          
        }
        
      </div>
    </div>
  )
}

export default DaysForeCast