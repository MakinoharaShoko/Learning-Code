import {
  RecoilRoot
} from 'recoil';
import './App.css';
import MainWindow from "./components/mainWindow";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <MainWindow/>
      </RecoilRoot>
    </div>
  );
}

export default App;
