import './App.css'
import {AnimationTest} from './pages/animationtest/AnimationTest'
import WaterFall from "./pages/waterfallTest/WaterFall";

function App() {
  const list = [200, 300, 500, 100, 250, 300, 200, 700];
  return (
    <div className="App">
      <WaterFall list={list}/>
    </div>
  )
}

export default App
