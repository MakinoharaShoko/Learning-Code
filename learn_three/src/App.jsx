import './App.css'
import {createThree} from "./three/learn_three";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        createThree();
    }, [])
    return (
        <div className="App"/>
    )
}

export default App
