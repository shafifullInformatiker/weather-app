import {React, useState, useEffect} from 'react';
import './infoBoard.css';

function InfoBoard(props) {
    console.log(props);

  return (
    <div className="infoBoard">
        
               
                    <h3>{props.countryCity.country}</h3>
                    <h2>{props.countryCity.city}</h2>
                    <p><span class="material-symbols-outlined">device_thermostat</span> <span >{props.data.temp_c} C</span></p>
                    <p><span class="material-symbols-outlined">device_thermostat</span> {props.data.temp_f}F</p>
                    <p>Sky: {props.data.condition}</p>
                    <p>{props.data.isDay ? "Day" : "Night"}</p>
                    
                
    </div>
  );
}

export default InfoBoard;
