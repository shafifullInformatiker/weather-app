import {React, useState, useEffect} from 'react';
import './WeatherData.css';

function WeatherData(props) {

  return (
    <div className="weatherData">
        <div>
        <div>
            <ul>
                <li>Condition: {props.data.condition}</li>
                <li>Degree Celcius: {props.data.temp_c}</li>
                <li>Degree Fahrenheit: {props.data.temp_f}</li>
                <li>Humidity: {props.data.humidity}</li>
                <li>UV: {props.data.uv}</li>
            </ul>



        </div>
        <div>
        <ul>
                <li>Wind Degree: {props.data.wind_degree}</li>
                <li>Wind Direction: {props.data.wind_dir}</li>
                <li>Wind Kph: {props.data.wind_kph}</li>
                <li>Wind Mph: {props.data.wind_mph}</li>
            
            </ul>




        </div>
        <div>
        <ul>
                <li>precip_in: {props.data.precip_in}</li>
                <li>precip_mm: {props.data.precip_mm}</li>
                <li>pressure_in: {props.data.pressure_in}</li>
                <li>Pressure_mb: {props.data.pressure_mb}</li>
                <li>vis_km: {props.data.vis_km}</li>
                <li>vis_miles:{props.data.vis_miles}</li>
            </ul>



        </div>
        </div>
    </div>
  );
}

export default WeatherData;
