import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {

        try {
            const storedValue = localStorage.getItem(key)
            return storedValue ? JSON.parse(storedValue) : defaultValue
        }
        catch (err) {
            console.log(err);
            return defaultValue

        }




    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}


export default useLocalStorage