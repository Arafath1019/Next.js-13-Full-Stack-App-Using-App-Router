"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvided = ({children}) => {
    const [mode, setMode] = useState("light");

    const toggle = () => {
        setMode(prevState => prevState === "dark" ? "light" : "dark");
    };

    return <ThemeContext.Provider value={{ toggle, mode}}>
                <div className={`theme ${mode}`}>{children}</div>
            </ThemeContext.Provider>
}