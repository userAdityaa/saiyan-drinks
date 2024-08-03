'use client'

import React, { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'

interface navbarContextType {
    counter: number, 
    setCounter: Dispatch<SetStateAction<number>>
}

const GlobalNavbarContext = createContext<navbarContextType>({ 
    counter: 0, 
    setCounter: () => {} ,
})


export const GlobalNavbarContextProvider = ({children}) => { 
    const [counter, setCounter] = useState(0);
    return (
        <GlobalNavbarContext.Provider value={{counter, setCounter}}>
            {children}
        </GlobalNavbarContext.Provider>
    )
}

export const useGlobalNavbarContext = () => useContext(GlobalNavbarContext);