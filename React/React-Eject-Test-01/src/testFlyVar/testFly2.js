import { useState } from 'react'
import { store } from './flyStore';

const TestFly2 = () => {
    const [value, setValue] = useState(0);
    if (value === 0) {
        store.connect('value', () => {
            setValue(store.get('value'))
        },'func2')
    }

    return <div onClick={() => { store.set('value', value + 1); }}>
        {value}
    </div>
}

export default TestFly2;