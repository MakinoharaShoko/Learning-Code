import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import './assets/style/test.css'

console.log('Hello, Webpack!');
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
