
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/contextApi';

const Main = () => {
 const {loading} = useContext(Context);
  return (
    <div className='w-full flex h-screen items-center justify-center  bg-[#dedede]'>
      <div>
      <img src="main.png absolute w-[500px]" alt="" />
    </div>
    <div className='  flex flex-col items-center relative justify-center' >
     <div className='text-center mb-10'>
     <img src="logo.png" alt="" className='w-[260px] h-[150px] mb-2 ml-2' />
     <h4 className='text-black text-xl drop-shadow-lg'>Weather App</h4>
     </div>
     
     <div className='shadow-lg'>
      <Link to="/dashboard" >
      <button type='submit' className='w-[400px] h-[50px] rounded-xl max-sm:w-[200px] border-solid border-2 border-[#E69C1F] shadow-[9px_9px_18px_#bdbdbd,-9px_-9px_18px_#ffffff]  font-semibold text-xl hover:bg-[#d38d15]/[0.7] hover:scale-110 transition ease-in-out delay-250 ' >Get Started</button>
      </Link>
      </div>
    </div>
    </div>
  )
}

export default Main
