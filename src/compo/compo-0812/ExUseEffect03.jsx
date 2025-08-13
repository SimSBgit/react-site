import React, { useEffect, useState } from 'react';

const ExUseEffect03 = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            // setSeconds((prev => prev + 1)) 
            // prev는 컨트롤되는 변수가 아니므로 계속해서 증가
            // ExUseEffect03은 seconds가 변할 때마다 실행되는 함수.
            setSeconds(seconds + 1)
        }, 1000)

        return() => {
            // setInterval과 clearInterval은 세트.
            clearInterval(timer)
            console.log("타이머 종료")
        }
    }, [])

    return (
        <div>
            <h2>{seconds} 초 경과</h2>
        </div>
    );
};

export default ExUseEffect03;