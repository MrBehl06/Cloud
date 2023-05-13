
import React, { createContext, useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Context = createContext();
const API_KEY = "df576d984fe14d96004e6fa85c3466f5"
export const AppContext = (props) => {
    const [loading, setLoading] = useState(true)
    const [searchResult, setSearchResult] = useState("London")
    const [data, setData] = useState([]);
    const [wea, setWea] = useState({})
    const [time,setTime] = useState("")
    useEffect(() => {
     fetchApi();
  }, [searchResult]);
  
  const fetchApi = async()=>{
 try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchResult}&units=metric&appid=${API_KEY}`);
  let data = await response.json();
  setLoading(false);
   TimeAndWeather(data);
   
 } catch (error) {
    toast.error("Error", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
 } 
  }

  const TimeAndWeather = (data) => {
    setData(data);
    setWea(data.weather[0]);
    const sun = new Date((data.sys.sunrise + data.timezone) * 1000);
    const tt = sun.toString();
    setTime(tt); 
  }

    return (
        <>
        <Context.Provider
            value={{
                data,wea,time,loading,setSearchResult
            }}
        >
            {props.children}
             
        </Context.Provider>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        </>
    );
};




























