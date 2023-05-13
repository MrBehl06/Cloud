import axios from "axios"

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';

const options = {
    params: {lat: '35.5', lon: '-78.5'},
    headers: {
      'X-RapidAPI-Key': '85f0401ee4msh566eba3d6432fecp10c8dejsn27f31359bf5d',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    },
  };
  export const fetchDataFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }