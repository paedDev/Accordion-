import React, { useState, useEffect } from 'react'
import data from '../Accordian/data'

const CS = ({ url }) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [errorMsg, setErrorMsg] = useState("")
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json()

            if (data && data.products && data.products.length) {
                setProducts(data.products)
                setLoading(false)


            }
        } catch (err) {
            console.log(err);
            setErrorMsg(`Error`)
            setLoading(false)

        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])

    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const result = (howMuchScrolled / height) * 100
        setScrollPercentage(result)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll", () => { })
        }
    })

    console.log(data, scrollPercentage);
    if (errorMsg)
        return <div>Error {errorMsg}</div>
    if (loading)
        return <div className='text-4xl'>Loading Data!!! Please Wait</div>


    return (
        <div className='min-h-screen font-mono flex flex-col items-center'>
            {/* for the navigation on top */}
            <div className=" z-10 bg-gray-500 text-white fixed w-full top-0  text-center">
                <h1 className='text-4xl p-10 '>Custom Scroll Animation</h1>
                <div className='h-2 w-full bg-gray-400' >
                    <div className='h-2 bg-green-300 w-0 transition duration-500'
                        style={{ width: `${scrollPercentage}%` }}>

                    </div>
                </div>
            </div>


            <div className='grid xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2 p-10 '>
                {
                    products && products.length ?
                        products.map((productItem, index) => (
                            <div className='bg-gray-100 p-4 flex flex-col justify-center items-center space-y-4 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 cursor-pointer  ' key={index}>
                                <h1 className='font-bold text-2xl'>{productItem.title}</h1>
                                <img src={productItem.thumbnail} alt={productItem.title} className='' />
                                <p className='text-gray-500'>{productItem.description}</p>
                                <p className='text-2xl font-semibold'>{Math.floor(`${productItem.price * 58}`).toLocaleString(`ph-US`)}</p>

                            </div>
                        ))

                        : null
                }
            </div>
        </div>
    )
}

export default CS