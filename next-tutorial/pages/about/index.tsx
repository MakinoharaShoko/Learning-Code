import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  return <div>
    About
    {count}
    <button onClick={() => setCount(count => count + 1)}>+1</button>
  </div>
}
