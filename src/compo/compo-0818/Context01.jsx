import React from 'react';
import { useGlobal } from '../Cont_Provider';

const Context01 = () => {
    // useGlobal()은 객체를 반환하기 때문에 const { } 중괄호 사용.
    const {count, setCount} = useGlobal()

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+1 증가</button><hr />
            <button onClick={() => setCount(count - 1)}>-1 증가</button>
            <p>Count : {count}</p>
        </>
    );
};

export default Context01;