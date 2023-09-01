import { uVK } from 'react-usevalue-hook';
import './App.css'
function Comp1() {
  const value1 = uVK(1, 'global1')

  return <div onClick={() => { value1.v = value1.v + 1 }}>
    {value1.v} Click to +1
  </div>
}

function Comp2() {
  const value2 = uVK(2, 'global1')

  return <div onClick={() => { value2.v = value2.v + 1 }}>
    {value2.v} Click to +1
  </div>
}

function App() {
  return (
    <div style={{padding:20}}>
      <div><Comp1 /></div>
      <div><Comp2 /></div>
    </div>
  )
}

export default App
