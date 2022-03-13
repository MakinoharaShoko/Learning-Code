import { useState } from 'react';

export default function CounterStore() {
    const [stage, setStage] = useState({ color: 'red' })

    function updateStage(key, value) {
        stage[key] = value;
        setStage({...stage});
    }

    return {
        stage,
        updateStage,
    }
}