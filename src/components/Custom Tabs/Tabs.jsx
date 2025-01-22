import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleOnclick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    return (
        // wrapper

        <div className='p-10'>
            <div className='flex justify-center space-x-2 pb-10'>
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} onClick={() => handleOnclick(index)}>
                            <span className={`px-8 py-3 rounded-xl transition duration-500 ${currentTabIndex === index ? "bg-green-400 text-white  " : "bg-red-400 text-white"}`}>{tabItem.label}</span>
                        </div>))
                }
            </div>

            <div className='text-red-500 text-4xl'>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs