import React, { useState } from 'react';
import { store_public } from '../js/store_public';

const Ex_js02 = () => {
    const [count, setCount] = useState(store_public.count)

    const buttonUp = () => {
        store_public.increment()
        setCount(store_public.count)
    }

    return (
        <div>
            <button onClick={buttonUp}>+1 증가</button>
            <p>Count : {count}</p>
        </div>
    );
};

export default Ex_js02;