import {Provider} from 'reto'
import stage from './store/stage'
import './App.css';
import MainWindow from "./components/mainWindow";

function App() {
  return (
    <div className="App">
      <Provider of={stage}>
        <MainWindow />
      </Provider>
    </div>
  );
}

export default App;
