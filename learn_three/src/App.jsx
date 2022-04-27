import './App.css'
import {createThree_box} from "./three/create_three_box";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        createThree_box();
    }, [])
    return (
        <div className="App"/>
    )
}

export default App
