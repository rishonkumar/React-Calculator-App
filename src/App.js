import React, { useState } from 'react'
import './App.css';


const App = () => {

  // Use State to update the value
  const [result, setResult] = useState("");

  // Handle the button when it is clicked
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  // Clear function - to earse the data
  const clearDisplay = ()=> {
    setResult("");
  }

  // calualte the result
  const calculateResult = ()=> {
    setResult(eval(result).toString());
  }

  return (
    <div className='calculator'>
      <input type="text" placeholder='0' id='answer' value={result} />
      <input type="button" value="/" className='button' onClick={clickHandler} />
      <input type="button" value="1" className='button' onClick={clickHandler} />
      <input type="button" value="2" className='button' onClick={clickHandler} />
      <input type="button" value="3" className='button' onClick={clickHandler} />
      <input type="button" value="*" className='button' onClick={clickHandler} />
      <input type="button" value="4" className='button' onClick={clickHandler} />
      <input type="button" value="5" className='button' onClick={clickHandler} />
      <input type="button" value="6" className='button' onClick={clickHandler} />
      <input type="button" value="+" className='button' onClick={clickHandler} />
      <input type="button" value="7" className='button' onClick={clickHandler} />
      <input type="button" value="8" className='button' onClick={clickHandler} />
      <input type="button" value="9" className='button' onClick={clickHandler} />
      <input type="button" value="-" className='button' onClick={clickHandler} />
      <input type="button" value="." className='button' onClick={clickHandler} />
      <input type="button" value="0" className='button' onClick={clickHandler} />
      <input type="button" value="=" className='button' onClick={calculateResult}/>
      <input type="button" value="Clear" className='button button1' onClick={clearDisplay} />
    </div>
  )
}

export default App