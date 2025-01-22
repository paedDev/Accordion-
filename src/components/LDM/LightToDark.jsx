import React from 'react'
import useLocalStorage from './useLocalStorage'

const LightToDark = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark")

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div className={`min-h-screen p-10 transtion duration-500 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl'>Hello World</h1>

                <div className='space-x-10  p-2'>
                    <a href="#" className={`px-8 py-3 rounded-xl xl:inline-block hidden ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>Home</a>
                    <a href="#" className={`px-8 py-3 rounded-xl xl:inline-block hidden ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>About Us</a>
                    <a href="#" className={`px-8 py-3 rounded-xl xl:inline-block hidden ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>Contact Us</a>
                    <a href="#" className={`px-8 py-3 rounded-xl xl:inline-block hidden ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>Products</a>
                    <button className='px-8 py-3 bg-gray-800 text-white rounded-xl'
                        onClick={handleChangeTheme}>
                        {
                            theme === "light" ? "Dark Mode" : "Light Mode"

                        }
                    </button>
                </div>

            </div>
        </div>
    )
}

export default LightToDark