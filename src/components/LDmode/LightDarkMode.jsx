import React from 'react'
import useLocalStorage from './useLocalStorage'

const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage("theme", "dark")


    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className={`w-full min-h-screen p-10 transition duration-500 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} }`}>


            <div className='  flex items-center justify-between '>
                <h1 className='text-4xl'>Hello World</h1>
                <div className='lg:space-x-20 space-x-4'>


                    <a href="#" className={`px-8 py-3 rounded-xl hidden xl:inline-block shadow-xl ${theme === "light" ? "bg-black text-white" : 'bg-white text-black '}`}>Home</a>
                    <a href="#" className={`px-8 py-3 rounded-xl hidden xl:inline-block shadow-xl ${theme === "light" ? "bg-black text-white" : 'bg-white text-black '}`}>About</a>
                    <a href="#" className={`px-8 py-3 rounded-xl hidden xl:inline-block shadow-xl ${theme === "light" ? "bg-black text-white" : 'bg-white text-black '}`}>Contact us</a>
                    <a href="#" className={`px-8 py-3 rounded-xl hidden xl:inline-block shadow-xl ${theme === "light" ? "bg-black text-white" : 'bg-white text-black '}`}>Product</a>
                    <button className='px-8 py-3 bg-gray-800 text-white rounded-full'
                        onClick={handleChangeTheme}>
                        {
                            theme === "light" ? " Dark Mode" : " Light Mode"
                        }
                    </button>
                </div>
            </div>

            <div>
                <h1></h1>
            </div>
        </div>
    )
}

export default LightDarkMode