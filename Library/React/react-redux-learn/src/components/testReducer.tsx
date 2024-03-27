import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {increment} from "../store/counterReducer";


export const TestReducer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return <div>
    <h1>TestReducer</h1>
    <p>count: {count}</p>
    <button onClick={() => dispatch(increment())}>increment
    </button>
  </div>;
}
