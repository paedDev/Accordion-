import { useEffect, useState } from "react";


export default function UseFetch(url, options = {}) {
    //https://dummyjson.com/products?limit=100

    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const [data, setData] = useState(null)

    async function fetchAPI() {
        try {
            setPending(true)
            const response = await fetch(url, { ...options })
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json()
            setData(result)
            setError(null)
            setPending(false)



        } catch (error) {

            console.log(error);
            setError(`${error} .Some error occured`)
            setPending(false)

        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return { data, error, pending }
}