import React, {useEffect, useState} from "react";

export function App() {
  useEffect(() => {
    initialScript();
  }, []);
  return <div>Hello, Webpack + React!</div>;
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
