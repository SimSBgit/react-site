import React, { useEffect, useRef, useState } from 'react';

const Ref04 = () => {
    const [value, setValue] = useState("")
    const preValue = useRef("")

    useEffect(() => {
        preValue.current = value
    }, [value])

    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <p>현재 값 : {value}</p>
            <p>이전 값 : {preValue.current}</p>
        </>
    );
};

export default Ref04;