import React, { useCallback, useState } from 'react';

const Callback01 = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={handleIncrease}>+1 증가</button>
        </>
    );
};

export default Callback01;