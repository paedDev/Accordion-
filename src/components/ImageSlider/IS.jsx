import React, { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const IS = ({ url, limit = 10, page = 1 }) => {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await res.json();
            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (err) {
            setErrorMsg(err.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== "") fetchImages(url)
    }, [url])
    if (loading) {
        return <div>Loading Data ! Please Wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error occured{errorMsg}</div>
    }
    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return (
        <div>
            <div className='flex w-[600px] h-[450px] justify-center items-center relative'>
                <BsArrowLeftCircleFill className='absolute left-1 w-16 h-16 text-white' onClick={handlePrevious} />
                {
                    images && images.length ?
                        images.map((imageItem, index) => (
                            <img src={imageItem.download_url} alt={imageItem.download_url}
                                key={imageItem.id}
                                className={currentSlide === index ? `rounded-xl shadow-xl w-full h-full` : "hidden"}
                            />
                        ))
                        : null
                }
                <BsArrowRightCircleFill className='absolute right-1 w-16 h-16 text-white' onClick={handleNext} />
                <span className='flex absolute bottom-1'>
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

export default IS