import React,{useState,useEffect} from 'react';
import axios from 'axios';
import weather from './weather.css';


const Weather = () => {
   
    const [latitude,setLatitude]=useState(0);
    const [longitude,setLongitude]=useState(0);
    const [city,setCity]=useState("")
    const [temp,setTemp]=useState("")
    const [press,setPress]=useState("")
    const [hum,setHum]=useState("")
    const [maxtemp,setMaxtemp]=useState("")
    const [mintemp,setMintemp]=useState("")
    const [wether,setWether]=useState("")
    let key= "36378a690f055afdb476e3f41f1732a3"
   

    const savePositionToState=(position)=>{
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    }
   const getData= async(data)=>{
    try{
     await  window.navigator.geolocation.getCurrentPosition(savePositionToState);
     const res =await  axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`)
        console.log(res.data)
        setCity(res.data.name)
        setHum(res.data.main.humidity)
        setTemp(res.data.main.temp)
        setPress(res.data.main.pressure)
        setMaxtemp(res.data.main.temp_max)
        setMintemp(res.data.main.temp_min)
        setWether(res.data.weather[0].main)
        
    }
    catch(err){
      console.log(err)
    }  
       
    }

    useEffect(()=>{
        getData();
    },[latitude,longitude])
  return (
    <div className='parent'>
        
        <div>
           <h3>{city}</h3>
           <p>{`${temp}	°C`}</p>
           <p>{`${wether}`}</p>
        </div>
          
        <div className='child2'>
          <p>{`Humidity-${hum}%`}</p>
          <p>{`Pressure-${press};`}</p>
          <p>{`Max-Temp-${maxtemp}	°C`}</p>
          <p>{`Min-Temp-${mintemp}	°C`}</p>
        </div> 
        
      
     
    </div>
  );
}

export default Weather;
