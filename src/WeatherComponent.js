import {React, useState, useEffect} from 'react';
import './Weather.css';
import locationIcon from './location.png'
import cloud from './cloud.png'
import sun from './sun.png'
import moon from './moon.png'
import star from './star.png'
import snow from './snowFlake.png'
import rain from './rain.png'



function WeatherComponent(props){

    let skyCondition = {
        sun:false,
        partialCloud:false,
        fullCloud:false,
        snow: false,
        rain:false,
        day:false,
        night:false,
      };

    const [animationStep, setAnimationStep] = useState(2);
    const [skyState, setSkyState] = useState(skyCondition);

    
      


     let propData = props.data.condition.toLowerCase();
     console.log(props.data);
     
     
       
      

    useEffect(() =>{
        setSkyState(() =>(skyCondition));
       console.log(skyState);
       console.log(skyState);
       
        console.log(propData);

       if(propData == "partly cloudy"){
        setSkyState( prevState =>({...prevState, partialCloud : true}));

       }

       if(propData == "partly cloudy" && props.data.isDay ){
        setSkyState( prevState =>({...prevState, partialCloud : true}));
        setSkyState( prevState =>({...prevState, sun : true}));
       }

       
       if(propData == "cloudy" || propData == "overcast"){
        setSkyState( prevState =>({...prevState, fullCloud : true}));
       }

       if(propData == "sunny"){
        setSkyState( prevState =>({...prevState, sun : true}));
       }

       if(propData == "light rain" || propData == "moderate rain at times" || propData == "moderate rain" || propData == "heavy rain at times" || propData == "heavy rain" || propData == "light freezing rain" || propData == "moderate or heavy freezing rain" ){
        setSkyState( prevState =>({...prevState, rain : true}));
       }

       if(propData == "heavy snow" || propData == "patchy light snow" ||  propData == "patchy moderate snow" || propData == "moderate snow" || propData == "patchy heavy snow" || propData == "light snow" || propData == "moderate or heavy snow showers"){
        setSkyState( prevState =>({...prevState, snow : true}));
       }

       if(props.data.isDay){
        setSkyState( prevState =>({...prevState, day : true}));
       }
       if(props.data.isDay === 0){
        setSkyState( prevState =>({...prevState, night : true}));
       }


      },[props.data])     
        

  return (
    <div className="weather">
    
    {skyState.day && <img src={sun} className={`sunTranslate sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star1' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star2' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star3' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star4' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star5' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star6' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star7' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star8' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star9' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star10' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star11' className={`sunFadeIn${animationStep}`}></img>}
    {skyState.night && <img src={star} id='star12' className={`sunFadeIn${animationStep}`}></img>}


    {skyState.night && <div className = 'nightBackGround'></div>}
     {skyState.night && <img src={moon} id='moon' className={`sunTranslate moon${animationStep}`}></img>}
     
     
     {skyState.partialCloud && <img src={cloud} className={`translate1 firstCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate2 secondCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate3 thirdCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate4 fourthCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate5 fifthCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate6 sixthCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate7 seventhCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate8 eightCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate9 ninthCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate10 tenthCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate3 thirdCloudFadeIn${animationStep}`}></img>}
     {skyState.partialCloud && <img src={cloud} className={`translate3 thirdCloudFadeIn${animationStep}`}></img>}





     {skyState.snow && <img src={snow} id='snow1' className={`snowTranslation1 firstSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow2' className={`snowTranslation2 secondSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow3' className={`snowTranslation2 thirdSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow4' className={`snowTranslation2 fourthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow5' className={`snowTranslation2 fifthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow6' className={`snowTranslation2 sixthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow7' className={`snowTranslation2 seventhSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow8' className={`snowTranslation2 eightSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow9' className={`snowTranslation2 ninthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow10' className={`snowTranslation2 tenthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow11' className={`snowTranslation2 eleventhSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow12' className={`snowTranslation2 twelvthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow13' className={`snowTranslation2 fourtenthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow14' className={`snowTranslation2 fiftenthSnowFadeIn${animationStep}`}></img>}
     {skyState.snow && <img src={snow} id='snow16' className={`snowTranslation2 sixtenthSnowFadeIn${animationStep}`}></img>}

   

    




     {skyState.rain && <img src={rain} id='rain1' className={`snowTranslation1 firstRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain2' className={`snowTranslation2 secondRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain3' className={`snowTranslation2 thirdRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain4' className={`snowTranslation2 fourthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain5' className={`snowTranslation2 fifthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain6' className={`snowTranslation2 sixthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain7' className={`snowTranslation2 seventhRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain8' className={`snowTranslation2 eightRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain9' className={`snowTranslation2 ninthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain10' className={`snowTranslation2 tenthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain11' className={`snowTranslation2 eleventhRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain12' className={`snowTranslation2 twelvthRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain13' className={`snowTranslation2 thirtenththRainFadeIn${animationStep}`}></img>}
     {skyState.rain && <img src={rain} id='rain14' className={`snowTranslation2 fourthenthRainFadeIn${animationStep}`}></img>}
     {skyState.raom && <img src={rain} id='rain15' className={`snowTranslation2 fiftenthRainFadeIn${animationStep}`}></img>}
     {skyState.raom && <img src={rain} id='rain16' className={`snowTranslation2 sixtenthRainFadeIn${animationStep}`}></img>}




    
    </div>
  );
}

export default WeatherComponent;
