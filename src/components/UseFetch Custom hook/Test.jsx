import React, { useState } from 'react'
import UseFetch from '.'

export default function UseFetchHookTest() {


    const { data, error, pending } = UseFetch("https://dummyjson.com/products", {})

    console.log(data,error,pending);
    

    return(
        <>
        <div className='text-center py-10 space-y-3 font-serif'>
            <h1 className='text-4xl font-bold mb-10 '>Use Fetch Hook</h1>

            {pending ? <h2>Pending! Please wait!!!</h2>: null}
            {error? <h3>{error}</h3> : null}

            {
                data && data.products && data.products.length ? 
                
                data.products.map((dataItem) => (
                    <p key={dataItem.id}>{dataItem.title}</p>
                ))
                
                : null
            }
        </div>
        </>
    )
}