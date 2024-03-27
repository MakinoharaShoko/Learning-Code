import './App.css'
import React from 'react';
import {useStateObject} from "./hooks/useObject";

function App() {
  const num = useStateObject(0)
  const handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        num.setState(num.state + 1);
        console.log(num.state);
      }, 1000)
    }
  }
  return <button onClick={handerClick}>{num.state}</button>
}

export default App
