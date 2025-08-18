import React from 'react';
import { useGlobal01 } from '../Cont_provider02';

const Context02 = () => {
    const {count1, setCount1} = useGlobal01()
    
    return (
        <div>
            <button onClick={() => c => c + 1}></button>
            <p>Count : {count1}</p>
        </div>
    );
};

export default Context02;