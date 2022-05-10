import './App.css'
import {Provider} from "react-redux";
import {TestReducer} from "./components/testReducer";
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TestReducer/>
      </div>
    </Provider>
  )
}

export default App
