import React, { useState } from 'react'

const Timer = () => {

    const time = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(time) ;
    

    const updateTimer = () =>  {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time) ;
    }

    setInterval(updateTimer, 1000)

  return (
    <div style = {
        {width:"250px", 
        border:"1px solid red", 
        height:"250px", 
        textAlign:"center", 
        paddingTop:"100px", 
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        
        }
    >
       <h1>{currTime}</h1>
    </div>
  )
}


export default Timer ;