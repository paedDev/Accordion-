import React from 'react'
import Tabs from './Tabs'

const TabsTest2 = () => {

    const tabs = [
        {
            label: "Home Page",
            content: <div className='text-center'>This is Content for tab 1</div>
        },
        {
            label: "About Page",
            content: <div className='text-center'>This is Content for tab 2</div>
        },
        {
            label: "Products Page",
            content: <div className='text-center'>This is Content for tab 3</div>
        },
    ]

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);

    }


    return (
        <div>
            <Tabs tabsContent={tabs} onChange={handleChange} />
        </div>
    )
}

export default TabsTest2