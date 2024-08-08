'use client'

import React, { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'

interface themeContextType {
    theme: string, 
    setTheme: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<themeContextType>({ 
    theme: 'orange', 
    setTheme: ():string => ''
})


export const GlobalContextProvider = ({children}: any) => { 
    const [theme, setTheme] = useState('orange');
    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);