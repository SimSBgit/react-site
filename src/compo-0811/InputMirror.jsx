import { useState } from "react"

export default function InputMirror() {
    const [text, setText] = useState("")

    return (
        <>
            <h2>String 값에 따라..</h2>
            <input type="text" value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="글자를 입력하세요." />
                <p>입력된 값은 : {text}</p>
        </>
    )
}