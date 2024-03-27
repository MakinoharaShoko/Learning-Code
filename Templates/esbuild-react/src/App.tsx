import React from 'react';
import s from './app.module.scss';
import Counter from './components/Counter';

export default function App() {
  return (
    <main>
      <p className={s.blue}>Hello World!</p>
      <p>This is a React Esbuild template!</p>
      <Counter />
    </main>
  );
}
