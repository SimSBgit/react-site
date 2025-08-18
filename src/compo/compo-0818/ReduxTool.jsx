import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../js/store_redux_slice';

const ReduxTool = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>리덕스</h2>
            <p></p>
            <h2>Counter : {count}</h2>
            <button onClick={() => dispatch(increment())}>+1 증가</button> <hr />
            <button onClick={() => dispatch(decrement())}>-1 감소</button> <hr />
            <button onClick={() => dispatch(incrementByAmount(5))}>+5 증가</button>
        </div>
    );
};

export default ReduxTool;