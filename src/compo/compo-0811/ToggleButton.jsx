import { useState } from "react"

export default function ToggleButton() {
    const [isOn, setIson] = useState(false)

    return(
        <>
        <h2>Boolean 값의..</h2>
        <div>
            <button onClick={() => setIson(!isOn)}>버튼{isOn ? "ON" : "OFF"}</button>
        </div>

        </>

    )
}