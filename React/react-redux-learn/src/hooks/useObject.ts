import {useState} from "react";

export function useStateObject(initialState: any = null) {
  const [objectState, setObjectState] = useState(initialState);
  return {
    state: objectState,
    setState: function (newState: any) {
      setObjectState(newState);
      this.state = newState;
    }
  };
}
