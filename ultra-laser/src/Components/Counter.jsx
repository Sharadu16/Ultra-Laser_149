import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
         setCounter((prev) => prev+1)
    }
 
    const handleDecrement = () => {
        if(counter>=1){
            setCounter((prev) => prev-1)
        }
        
    }

  return (
    <div className='btn'>
      <div>
        <div>Counter : {counter}</div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

export default Counter 