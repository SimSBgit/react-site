import { useState } from "react"

export default function ColorChanger() {
    const [color, setColor] = useState("purple")
    
    return(
        <>
        <h2>스타일 값의..</h2>
        <h2 style={{ color: 'red' }}>색상 변경</h2>
        <button onClick={() => setColor("pink")}>핑크</button>
        <button onClick={() => setColor("skyblue")}>스카이블루</button>
        <button onClick={() => setColor("yellow")}>노랑</button>
        <button onClick={() => setColor("green")}>초록</button>
        </>
    )
}