import { useState } from "react"

export default function Counter() {
    //    상수명, 세터함수           (초기값)
    const [count, setCount] = useState(0)

    return (
        <>
            <h2>Number값의 상태 변화에 따라 새로 렌더링</h2>
            <h2>카운터: {count}</h2>
            <button onClick={() => setCount(count + 1)}>1씩 ++ 증가</button>
            <br />
            <button onClick={() => setCount(count - 1)}>1씩 -- 감소</button>
        </>
    )
}













// function Counter() {

// }