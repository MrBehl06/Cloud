import React ,{useContext}from 'react'
import { Context } from '../context/contextApi'
const AirCondition = () => {
  const {data} = useContext(Context);
  return (
    <div className='bg-[#dedede] w-[600px] px-2 py-2 h-[250px] rounded-md  shadow-[9px_9px_18px_#bdbdbd,-9px_-9px_18px_#ffffff]'>
      <div className='mb-3 mt-2  text-center '>
        <h2 className=' px-1 py-1 text-xl text-black '>Air Conditions</h2>
      </div>
      <div className='grid grid-cols-2 '>
        <div className='flex flex-col items-center'>
          <span className='text-lg text-black'>
          Real Feel
          </span>
          <h2 className='text-4xl text-[#E69C1F] drop-shadow-sm'>
          {data.main.temp}
          </h2>
        </div>
        <div className='flex flex-col items-center '>
          <span className='text-lg text-black'>
          Wind
          </span>
          <h2 className='text-4xl text-[#E69C1F] drop-shadow-sm'>
          {data.wind.speed}
          </h2>
        </div>
        <div className='flex flex-col items-center mt-3'>
          <span className='text-lg text-black'>
          Clouds
          </span>
          <h2 className='text-4xl text-[#E69C1F] drop-shadow-sm'>
          {data.clouds.all}%
          </h2>
        </div>
        <div className='flex flex-col items-center mt-3'>
          <span className='text-lg text-black'>
          Humidity
          </span>
          <h2 className='text-4xl text-[#E69C1F] drop-shadow-sm'>
          {data.main.humidity}
          </h2>
        </div>

      </div>
      </div>

  )
}

export default AirCondition