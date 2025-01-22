import React, { useEffect, useState } from 'react'

const CustomScroll = ({ url }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [scrollPercentage, setscrollPercentage] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const data = await response.json()

            if (data && data.products && data.products.length) {
                setData(d => [...d.products])
                setLoading(false)
            }
        }
        catch (err) {
            console.log(err);
            setErrorMsg(err.message)

        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])


    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percentage = (howMuchScrolled / height) * 100
        setscrollPercentage(percentage)

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll", () => { })
        }
    }, [])

    console.log(data, scrollPercentage);

    if (errorMsg)
        return <div>Error {errorMsg}</div>
    if (loading)
        return <div className='text-4xl'>Loading Data!!! Please Wait</div>



    return (
        <div className='min-h-screen p-10 w-full space-y-10 flex flex-col items-center'>
            {/* top container */}
            <div className='fixed top-0 z-10 w-full bg-black text-center'>
                <h1 className='p-10 text-2xl text-white '>Custom Scroll Indicator</h1>
                {/* scroll styling here */}
                <div className='w-full h-2 bg-gray-300'>
                    <div style={{ width: `${scrollPercentage}%` }} className='h-2 bg-green-300  w-0'>

                    </div>
                </div>
            </div>



            {/* start of container */}
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {data && data.length ?
                    data.map((dataItem, index) => (

                        <div key={index} className='bg-gray-100 p-4 flex flex-col justify-center items-center shadow-xl rounded-xl space-y-4'>
                            <h1 className='font-bold'>{dataItem.title}</h1>
                            <img src={dataItem.thumbnail} alt={dataItem.title} />
                            <p className='text-gray-500'>{dataItem.description}</p>
                            <p className='text-xl font-semibold'>{Math.floor(dataItem.price * 58).toLocaleString(`en-US`)}</p>
                        </div>

                    ))


                    : null}
            </div>
        </div>
    )
}

export default CustomScroll