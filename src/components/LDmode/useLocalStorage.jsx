import React, { useState, useEffect } from 'react'
const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {


        try {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : defaultValue
        } catch (err) {
            console.log(err);
            return defaultValue
        }
        // try {
        //     currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        // } catch (error) {
        //     console.log(error);
        //     currentValue = defaultValue

        // }
        // return currentValue
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]


}

export default useLocalStorage