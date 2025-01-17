import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
const ImageSlide = ({ url, limit = 20, page = 1 }) => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)


    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const result = await response.json()
            if (result) {
                setImages(result)
                setLoading(false)
            }
            console.log(result);

        } catch (err) {
            setErrorMsg(err.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])
    if (loading) {
        <div>Please Wait ! Loading Data</div>
    }
    if (errorMsg !== null) {
        return <div>Error occured{errorMsg}</div>
    }

    const handlePreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }



    return (
        <div>
            <div className='flex w-[600px] h-[450px] justify-center items-center relative'>

                <BsArrowLeftCircleFill className='absolute text-white h-16 w-16 left-1'
                    onClick={handlePreviousSlide} />
                {

                    images && images.length ?
                        images.map((imageItem, index) => (

                            <img
                                key={imageItem.id}
                                src={imageItem.download_url}
                                alt={imageItem.download_url}

                                className={currentSlide === index ?
                                    "rounded-xl shadow-xl "
                                    : "hidden"
                                }


                            />

                        )) : null

                }


                <BsArrowRightCircleFill className='absolute text-white h-16 w-16 right-1' onClick={
                    handleNextSlide
                } />
                <span className='absolute bottom-6'>
                    {
                        images && images.length ?
                            images.map((imageItem, index) => (
                                <h1 className='text-center font-bold mb-4 text-white text-2xl'>{currentSlide === index ? imageItem.author : null}</h1>

                            ))

                            : null
                    }
                    {images && images.length ?
                        images.map((_, index) => (
                            <button className={currentSlide === index ? 'bottom-0 bg-white h-6 w-6 rounded-full border-none outline-none mr-2' : 'bottom-0 bg-gray-300 h-6 w-6 rounded-full border-none outline-none mr-2'} key={index} onClick={() => setCurrentSlide(index)}>
                            </button>
                        ))

                        : null}
                </span>



            </div>
        </div>
    )
}

export default ImageSlide