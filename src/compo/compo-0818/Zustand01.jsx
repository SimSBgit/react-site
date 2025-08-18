import React from 'react';
import { store_zustand } from '../js/store_zustand';

const Zustand01 = () => {
    const {count, increment, decrement, reset} = store_zustand()

    return (
        <>
            <button onClick={increment}>+1 증가</button> <hr />
            <button onClick={decrement}>-1 증가</button> <hr />
            <button onClick={reset}>리셋</button>
            <p>Count : {count}</p>
        </>
    );
};

export default Zustand01;