import './App.css'
import {Provider} from "react-redux";
import {TestReducer} from "./components/testReducer";
import {store} from './store';
import {TestRef, TestRefRef} from "./components/testRef";
import React from 'react';

function App() {
  const ref = React.useRef<TestRefRef>(null);
  const logRef = () => {
    console.log(ref.current);
    ref.current!.increment();
  }
  return (
    <Provider store={store}>
      <div className="App">
        <TestReducer/>
        <TestRef ref={ref}/>
        <button onClick={logRef}>Log Ref and increase</button>
      </div>
    </Provider>
  )
}

export default App
