import { useValueWithKey } from 'react-usevalue-hook';
import './App.css'
function Comp1() {
  const value1 = useValueWithKey(1, 'global1')

  return <div onClick={() => { value1.value = value1.value + 1 }}>
    {value1.value} Click to +1
  </div>
}

function Comp2() {
  const value2 = useValueWithKey(2, 'global1')

  return <div onClick={() => { value2.value = value2.value + 1 }}>
    {value2.value} Click to +1
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
