import React, { useState, useEffect } from 'react'

const LoadMore = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            if (result && result.products && result.products.length) {
                setProducts((p => [...p, ...result.products]))
                setLoading(false)
            }
            console.log(result);

        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }
    if (loading) {
        <div>Please Wait for it to Load</div>
    }
    // update when it changes the count 
    useEffect(() => {
        fetchProducts()
    }, [count])
    useEffect(() => {
        if (products && products.length === 100) setDisableBtn(true)
    })


    return (
        <div className='flex flex-col justify-center item-center gap-4 p-6'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                {
                    products && products.length ?
                        products.map((itemProducts, index) => (
                            <div key={index} className='border border-gray-500 p-6 rounded-sm shadow-lg flex justify-center flex-col items-center bg-gray-200'>
                                <img className='h-48 w-48 mb-2'
                                    src={itemProducts.thumbnail}
                                    alt={itemProducts.title} />


                                <div className='flex flex-col space-y-6 items-center'>
                                    <h3 className='font-bold text-2xl'>{itemProducts.title}</h3>
                                    <p className='text-gray-500 w-3/4 text-left'>{itemProducts.description}</p>
                                    <p className='font-semibold text-xl'>{`Philippine Peso : ${Math.floor(itemProducts.price * 58).toLocaleString(`en-US`)}`}</p>
                                </div>

                            </div>
                        ))

                        : null
                }

            </div>
            <div className='flex justify-center p-6'>
                <button className='px-8 py-3 bg-sky-500 text-white rounded-xl font-bold' onClick={() => setCount(count + 1)} disabled={disableBtn}>Load More Button</button>

            </div>
            {
                disableBtn ? <p className='text-center'>You have reached 100 products</p> : null
            }
        </div >
    )
}

export default LoadMore