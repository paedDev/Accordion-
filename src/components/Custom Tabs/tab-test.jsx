import React from 'react'
import Tabs from './Tabs'
const TabTest = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div className='text-center'>This is Content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div className='text-center'>This is Content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]
    function RandomComponent() {
        return <div className='text-center'>Some Random Content</div>
    }
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);

    }
    return (

        <Tabs tabsContent={tabs} onChange={handleChange} />

    )
}

export default TabTest