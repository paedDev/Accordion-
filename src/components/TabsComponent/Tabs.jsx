import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    const handleTab = (currentTabIndex) => {
        setCurrentTabIndex(currentTabIndex)
        onChange(currentTabIndex)
        console.log(currentTabIndex);

    }

    return (
        <div className='p-10'>
            <div className='flex justify-center space-x-2 pb-10'>
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} onClick={() => handleTab(index)} >
                            <span className={`px-8 py-3 rounded-xl text-white transition duration-500 ${currentTabIndex === index ? " bg-red-500" : "bg-green-500"}`}>{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            {
                <div>
                    {
                        tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                    }
                </div>
            }


        </div>

    )
}

export default Tabs