import React, { useCallback, useState, memo } from 'react';

const Child = memo(({onClick}) => {
    console.log("자식 렌더링")
    return <button onClick={onClick}>자식에서 카운트 증가</button>
})

const Callback02 = () => {
    const [count, setCount] = useState(0)

    const increment =useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
        <div>
            <p>Count : {count}</p>
            <Child onClick={increment}/>
        </div>
    );
};

export default Callback02;