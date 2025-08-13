import React, { useMemo, useState } from 'react';

function Child({ config }) {
    console.log("~~ Child 랜더링")
    return <div>오늘의 테마는: {config.theme}</div>
}

const Memo04 = () => {
    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)

    const config =useMemo(() => ({ theme }), [theme])
    
    return (
        <div>
            <Child config={config} />
            <button
            onClick={() => setTheme(
                (t) => (t === "light" ? "dark" : "light")
            )}>
                테마 변경
            </button>
            <button onClick={() => setCount((c) => c + 1)}>count : {count}</button>
        </div>
    );
};

export default Memo04;