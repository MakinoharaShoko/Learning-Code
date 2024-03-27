import React, {useEffect, useState} from "react";
import { logOne } from "./funcs";
import s from './app.module.scss';

export function App() {
  useEffect(() => {
    initialScript();
  }, []);
  return <div className={s.t} onClick={logOne}>Hello, Webpack + React!</div>;
}

function initialScript() {
  let isInit = false;
  return () => {
    if (!isInit) {
      console.log('Hello, React!');
      isInit = true;
    }
  }
}
