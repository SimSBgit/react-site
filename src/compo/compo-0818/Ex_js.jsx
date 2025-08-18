import React, { useState } from 'react';
import { store_public } from '../js/store_public';

const Ex_js = () => {
    // 외부에 있는 store_public.count 매개변수로 설정
    const [count, setCount] = useState(store_public.count)

    const handleClick = () => {
        // js에 있는 increment 메서드 사용
        store_public.increment()
        // 강제로 랜더링
        setCount(store_public.count)
    }

    const handleDown = () => {
        store_public.decrement()
        setCount(store_public.count)
    }

    const handleReset = () => {
        store_public.reset()
        setCount(store_public.count)
    }

    return (
        <div>
            <button onClick={handleClick}>+1 증가</button> <hr />
            <button onClick={handleDown}>-1 감소</button> <hr />
            <button onClick={handleReset}>리셋</button>
            <p>Count : {count}</p>
        </div>
    );
};

export default Ex_js;