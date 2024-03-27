import {useEffect, useRef, useState} from "react";

export function TestChild() {
  const [i, setI] = useState(0);
  const iRef = useRef(i);
  iRef.current = i;
  useEffect(() => {
    setTimeout(() => setI(iRef.current + 1), 1000);
  })
  return <div>
    {i}
  </div>
}
