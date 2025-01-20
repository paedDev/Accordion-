import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const Light2DarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark")

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    console.log(theme);

    return (
        //light-dark-mode
        <div className={`min-h-screen flex flex-col justify-center p-10 ${theme === "light" ? `bg-white text-black` : "bg-black text-white"}`} >
            <div className='space-y-4'>
                <p>Hello World!</p>
                <button className='px-8 py-3  text-white rounded-xl bg-gray-800'
                    onClick={handleToggleTheme}
                >{theme === "light" ? "Switch to dark mode" : " Switch to Light Mode"}</button>

            </div>
        </div>
    )
}

export default Light2DarkMode