import React from "react";
import { useState ,useContext} from "react";
import { Context } from "../context/contextApi";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const {setSearchResult} = useContext(Context)
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const query = (e) =>{
    if(e.key === "Enter"){
      setSearchResult(city);
      setCity("");
    }
  }

  
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search City"
        value={city}
        onKeyUp={query}
        onChange={(e)=>{
        handleChange(e);
        }}
        className="w-[900px] h-[40px] border-solid border-2 border-[#E69C1F] shadow-[9px_9px_18px_#bdbdbd,-9px_-9px_18px_#ffffff] text-[#000000] placeholder-black   text-xl text-center rounded-full mt-10"
      />
    </div>
  );
};

export default SearchBar;
