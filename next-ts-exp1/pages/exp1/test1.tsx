import { runtime } from "../controller/runtime"

const Test1 = () => {
    return <div>
        {runtime.testNumber1}
    </div>
}

export default Test1;