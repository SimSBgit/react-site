import React, { useMemo, useState } from 'react';

const Memo01 = () => {
    const [count, setCount] = useState(0)

    const double = useMemo(() => {
        
        console.log("double 값 계산 중..")
        return(count * 2)

    }, [count])
    return (
        <div>
            <h2>count : {count}</h2>
            <h2>double :{double}</h2>
            <button onClick={() => setCount(count + 1)}>++1 증가</button><hr />
            <button onClick={() => setCount(c => c - 1)}>--1 감소</button>
        </div>
    );
};

export default Memo01;