import React, { useEffect, useState } from 'react'

const LoadMoreBtn = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    async function fetchProduct() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            console.log(result);
            if (result && result.products && result.products.length) {
                setProducts(prevProducts => [...prevProducts, ...result.products])
                setLoading(false)
            }

        } catch (err) {
            console.log(err);
            setLoading(false)


        }
    }
    useEffect(() => {
        fetchProduct()
    }, [count])

    if (loading) {
        return <div>Loading Data ! Please Wait</div>
    }

    return (

        <div className='flex flex-col p-6 '>
            {/* container */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 '>
                {
                    products && products.length ?
                        products.map((itemProduct) => (
                            <div key={itemProduct.id} className='p-6 border border-gray-400 rounded bg-gray-200 flex flex-col items-center'>
                                <img className='h-48 w-48'
                                    src={itemProduct.thumbnail}
                                    alt={itemProduct.title}
                                />
                                <p className=' py-2'>{itemProduct.title}</p>


                            </div>
                        ))
                        : null
                }

            </div>
            <div className='flex justify-center items-center p-10'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>
        </div>
    )
}

export default LoadMoreBtn