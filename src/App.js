import {React, useState, useEffect} from 'react';
import './App.css';
import locationIcon from './location.png'
import TextInputComponent from './TextInutComponent';
import Weather from './Weather.js';
import WeatherData from './WeatherData';
import InfoBoard from './InfoBoard';



function App() {

    const weatherState = {
      cloudData:"",
      condition:"",
      humidity:"",
      isDay:"",
      precip_in:"",
      precip_mm:"",
      pressure_in:"",
      pressure_mb:"",
      temp_c:"",
      temp_f:"",
      uv:"",
      vis_km:"",
      vis_miles:"",
      wind_degree:"",
      wind_dir:"",
      wind_kph:"",
      wind_mph:"",
  }

  const initialLoc ={
    city:"",
    country:""
  }

  const [weatherData, setWeatherData] = useState(weatherState);
  const [locationInfo, setLocationInfo] = useState(initialLoc);
  


  const handleDataFromChild = (data) => {
        setWeatherData(data);
  };

  const getCityCountry = (data) => {
    setLocationInfo(data);
};




  return (
    <div className="App">
      <TextInputComponent onDataFromChild={handleDataFromChild} onDataLocation={getCityCountry}/>
      <Weather data={weatherData} />
      {locationInfo.city != "" && <WeatherData data={weatherData} />}
     {locationInfo.city != "" &&  <InfoBoard data={weatherData} countryCity ={locationInfo} /> }

      
    </div>
  );
}

export default App;
