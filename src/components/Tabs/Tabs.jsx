import React, { useState } from 'react'

const Tabs = ({ tabsContent, OnChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleOnClick = (getCurrentIndex) => {
        setCurrentIndex(getCurrentIndex)
        OnChange(getCurrentIndex)
    }
    return (
        <div className='min-h-min w-full'>
            <div className='flex justify-center items-center space-x-4 py-10'>
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} onClick={() => handleOnClick(index)} className={`px-8 py-3 rounded transition duration-500 ${currentIndex === index ? "bg-green-500 text-green-200" : "bg-gray-200 text-black-200 shadow-lg"}`}>
                            <span>
                                {tabItem.label}
                            </span>
                        </div>


                    ))
                }
            </div>
            <div className='text-center text-4xl'>
                {tabsContent[currentIndex] && tabsContent[currentIndex].content}
            </div>
        </div>
    )
}

export default Tabs