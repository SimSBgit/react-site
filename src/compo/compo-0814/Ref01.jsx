import React, { useRef } from 'react';

const Ref01 = () => {
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder='여기에 입력' /><br />
            <button onClick={focusInput}>포커스 주기</button>
        </div>
    );
};

export default Ref01;