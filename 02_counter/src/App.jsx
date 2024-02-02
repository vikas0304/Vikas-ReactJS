import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count , setCount] = useState(5)


  const addValue = ()=>{
    setCount(count + 1);
    console.log("Value added" , count);
  }

  const removeValue = ()=>{
    setCount(count - 1)
    console.log("Value added" , count - 1);
  }

  return (
    <>
      <h1>vikas | React</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue}>Add Value</button>
       <br/>
       <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
