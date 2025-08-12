

import React, { useEffect, useState } from 'react';

const ExUseEffect05 = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(
        () => {
            const hResize = () => setWidth(window.innerWidth)
            window.addEventListener("resize", hResize)
            // console.log("윈도우 리사이즈 리스너 등록") 안나옴

            return() => {
                window.removeEventListener("resize", hResize)
                // console.log("윈도우 리사이즈 리스너 해제") 안나옴
            }
        }, [])
        
    return (
        <div>
            <h2>현재 창의 너비 : {width}</h2>
        </div>
    );
};

export default ExUseEffect05;