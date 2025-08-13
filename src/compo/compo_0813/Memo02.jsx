import React, { useMemo, useState } from 'react';

function heavyCalculation(num) {
    console.log("무거운 계산 실행 중..")
    let total = 0
    for (let i=0; i < 1e7; i++) {
        total = total + num
    }
    return total
}

const Memo02 = () => {
    const [num, setNum] = useState(1)
    const [theme, setTheme] =useState(false)

    const total = useMemo(() => {
        heavyCalculation(num)
    }, [num])

    return (
        <div style={{
            background: theme ? "#222" : "#fff",
            color: theme ? "#fff" : "#000",
        }}>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder='입력'/>
            <p>결과 {total}</p>
            <button onClick={() => setTheme((t) => !t)}>테마 변경</button>
            {/* <button onClick={() => setTheme(!theme)}>테마 변경</button> */}
            
        </div>
    );
};

export default Memo02;