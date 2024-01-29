import {React, useState, useEffect} from 'react';
import './App.css';
import locationIcon from './location.png'
import cloud from './cloud.png'




function TextInputComponent({ onDataFromChild, onDataLocation }) {

    const initialState = {
        inputString:"",
        city:"",
        country: "",
        entryMethode:"keyPress",

    }

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


  const [initialInput, setInputString] = useState(initialState);
  const [locationList, setLocationList] = useState([]);
  const [weatherData, setWeatherData] = useState(weatherState);

  

  const api = `https://api.geoapify.com/v1/geocode/autocomplete?text=${initialInput.inputString}&apiKey=97f51a36f3c044c4b1cbfab9dcf52a51`;





  const getInput = (e)=>{
  
    setInputString( prevState =>({...prevState, entryMethode:"keyPress", inputString : e.target.value})); 

    }
  
    const getInputDropDown = (a,b) =>{
      setInputString( prevState =>({...prevState, entryMethode:"dropDown", city:a, country:b})); 
      onDataLocation({city:a, country:b});
  
    }
  
    const showLocation = () =>{
          window.navigator.geolocation.getCurrentPosition((position) => {
            // Extract the latitude and longitude from the position object
            const { latitude, longitude } = position.coords;
  
  
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=97f51a36f3c044c4b1cbfab9dcf52a51`)
            .then(response => response.json())
            .then(result =>{
              if(result === undefined){
              console.log([]);
              }else{
              setInputString( prevState =>({...prevState, city:result.features[0].properties.city, country:result.features[0].properties.country, entryMethode:"gps", inputString :""})); 
              onDataLocation({city:result.features[0].properties.city, country:result.features[0].properties.country});
              }
            
            }) .catch(error => console.log('error', error));
  
            
          });
    }
  
    const weatherApi = `https://weatherapi-com.p.rapidapi.com/current.json?q=${initialInput.city}%20${initialInput.country}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd5b3b6c8e2msh1c5a82677dda1b4p1537cdjsnea0eca748fe0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };




    useEffect(() =>{


        const fetchData = ()=>{
      
          fetch(api)
          .then(response => response.json())
          .then(result =>{
            if(result.features === undefined){
            setLocationList([]);
            }else{
            setLocationList(result.features)
            }
          
          }) .catch(error => console.log('error', error));
      
        }
        fetchData();
       
        console.log(locationList);
      
      },[api])

      useEffect(() =>{

        const fetchWeather = ()=>{
    
          fetch(weatherApi,options)
          .then(response => response.json())
          .then(result =>{
            if(result.current === undefined){
            console.log([]);
            }else{
            console.log(result.current);
            onDataFromChild( prev =>({
                  cloudData:result.current.cloud,
                  condition:result.current.condition.text,
                  humidity:result.current.humidity,
                  isDay:result.current.is_day,
                  precip_in:result.current.precip_in,
                  precip_mm:result.current.precip_mm,
                  pressure_in:result.current.pressure_in,
                  pressure_mb:result.current.pressure_mb,
                  temp_c:result.current.temp_c,
                  temp_f:result.current.temp_f,
                  uv:result.current.uv,
                  vis_km:result.current.vis_km,
                  vis_miles:result.current.vis_miles,
                  wind_degree:result.current.wind_degree,
                  wind_dir:result.current.wind_dir,
                  wind_kph:result.current.wind_kph,
                  wind_mph:result.current.wind_mph,
            }));
    
            }
          
          }) .catch(error => console.log('error', error));
      
        }
        fetchWeather();
      
       
       
      
      },[weatherApi])




  return (
    
    <div className='textComponent'>
    <input type='text' placeholder='Your Location' value={initialInput.entryMethode == "keyPress" ? initialInput.inputString :`${initialInput.city}, ${initialInput.country}`} onChange={getInput} />
    <a href='#' onClick={showLocation}><img className='hovered-element' src={locationIcon}></img></a>
    <ul className='dropDownList'>
     {initialInput.entryMethode == "keyPress" && locationList.map((item, index) => (
      <li key={index}><a onClick={() => getInputDropDown(item.properties.city,item.properties.country)}>{item.properties.city}, {item.properties.country}</a></li>
    ))}
    </ul>
  </div>
     
  );
}

export default TextInputComponent;
