import React, { useEffect, useState } from 'react';

const ExUseEffect02 = () => {
    const [count, setCount] = useState(0)

    useEffect(
        () => {
            console.log(`count값이 바뀔 때마다 실행 ${count}`)
        },[count])

    return (
        <div>
            <p>카운트 {count}</p>
            <button onClick={() => setCount(count + 1)}>++1 증가</button><br />
            <button onClick={() => setCount(count - 1)}>--1 감소</button>
        </div>
    );
};

export default ExUseEffect02;