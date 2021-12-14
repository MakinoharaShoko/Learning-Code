import { useState } from "react";
import { runtime } from "../controller/runtime";

const Exp1Index = ()=>{
    const [count,setCount] = useState(0);
    return <div onClick={()=>{runtime.testNumber1 = runtime.testNumber1+1;setCount(count+1)}}>
        Test
        {runtime.testNumber1}
    </div>
}

export default Exp1Index;