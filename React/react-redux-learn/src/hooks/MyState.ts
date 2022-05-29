import {useState} from "react";

export function MyState(initialState: any = null) {
  const [myState, setMyState] = useState(initialState);
  console.log(myState)
  return [myState, setMyState];
}
