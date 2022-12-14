import React, { useState } from 'react'

const Timer = () => {

    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time) ;
    console.log(time);
    

    const updateTimer = () =>  {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time) ;
    }

    setInterval(updateTimer, 1000)

  return (
    <div style = {
      {width:"425px", 
      height:"90px", 
      textAlign:"center", 
      boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
      backgroundColor:"#82CAFF",
      color:"white",
      borderRadius:"15px"
    }}>
       <h1>{currTime}</h1>
    </div>
  )
}


export default Timer ;