import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Value is {count}, Click to +1;
    </div>
  );
}
