import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleOnclick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    return (
        <div className='py-16'>
            <div className='flex flex-col lg:flex-row justify-center lg:space-x-10 items-center space-y-10 lg:space-y-0 p-5'>
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} className="hover:scale-105 transform transiton duration-500"
                            onClick={() => handleOnclick(index)}>
                            <span className={`px-8 py-3 rounded shadow-xl transition duration-500 cursor-pointer ${currentTabIndex === index ? "bg-green-500 text-green-200" :
                                "bg-green-200 text-green-600"
                                }`}>{tabItem.label}</span>
                        </div>
                    ))

                }
            </div>
            {/* result */}
            <div className='h-10 px-20 py-10 flex justify-center items-center text-2xl text-red-500 mt-20 '>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs