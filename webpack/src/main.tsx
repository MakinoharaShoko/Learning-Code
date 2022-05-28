import React from 'react';
import {createRoot} from 'react-dom/client';


import './assets/style/test.css'

console.log(hello());

function hello() {
  return 'hello,webpack';
}

const App = () => {
  return <div>hello world2</div>;
};

const root = createRoot(document.getElementById('root')!);
root.render(<App/>);
