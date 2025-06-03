'use client'

import React, { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'

interface themeContextType {
    theme: string, 
    setTheme: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<themeContextType>({ 
    theme: 'peach', 
    setTheme: ():string => ''
})


export const GlobalContextProvider = ({children}: any) => { 
    const [theme, setTheme] = useState('peach');
    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);