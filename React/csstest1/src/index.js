import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AniScroll from "aniscroll";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'), setAni
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function setAni(){
    let ani = new AniScroll();
    ani.init(500);
    ani.addElementController('testElement1', 0, 0.7);
    ani.addElementController('testElement2', 800, 1.1);
}
