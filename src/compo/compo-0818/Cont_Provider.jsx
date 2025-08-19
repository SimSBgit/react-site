import React, { createContext, useContext, useState } from 'react';

// 1. Context 생성
const GlobalContext = createContext()

// 2.Provider 생성
const Cont_Provider = ({children}) => {
    const [count, setCount] = useState(0)
    
    return (
        <>
    <GlobalContext.Provider value={{ count, setCount }}>
        {children}
    </GlobalContext.Provider>
        </>
    );
};

export default Cont_Provider;

// 3.커스텀 훅으로 설정
export const useGlobal = () => useContext(GlobalContext)