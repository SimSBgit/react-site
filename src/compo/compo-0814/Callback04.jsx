import React, { useCallback, useEffect, useState } from 'react';

const Callback04 = () => {
    const [count, setCount] =useState(0)

    const logCount = useCallback(() => {
        console.log(`현재 카운트: ${count}`)
    }, [count])

    useEffect(() => {
        logCount()
    }, [logCount])

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                +1 증가버튼
            </button>
        </div>
    );
};

export default Callback04;