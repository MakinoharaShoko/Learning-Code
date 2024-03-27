import './App.css'
import {Provider} from "react-redux";
import {mainStore} from './store/mainStore';
import Main from "./Components/Main";
import '@icon-park/react/styles/index.css'

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
