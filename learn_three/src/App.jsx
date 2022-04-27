import './App.css'
import {useEffect} from "@types/react";
import {createThree} from "./three/learn_three";

function App() {
    useEffect(() => {
        createThree();
    }, [])
    return (
        <div className="App"/>
    )
}

export default App
