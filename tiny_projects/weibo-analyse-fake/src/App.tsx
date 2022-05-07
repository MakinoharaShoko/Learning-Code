import './App.css'
import {Provider} from "react-redux";
import {mainStore} from './store/mainStore';
import {Main} from "./Components/Main";

function App() {

  return (
    <div className="App">
      <Provider store={mainStore}>
        <Main/>
      </Provider>
    </div>
  )
}

export default App
