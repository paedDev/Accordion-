import React from 'react'
import useLocalStorage from './useLocalStorage'

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage("theme", "dark")


    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className={`flex min-h-screen items-center p-10 transition duration-500 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} }`}>
            <div className='space-y-8'>
                <h1 className='text-4xl'>Hello World</h1>
                <button className='px-8 py-3 bg-gray-800 text-white rounded-xl'
                    onClick={handleChangeTheme}>
                    {
                        theme === "light" ? "Switch to Dark Mode" : "Switch to light Mode"
                    }
                </button>
            </div>
        </div>
    )
}

export default LightDarkMode