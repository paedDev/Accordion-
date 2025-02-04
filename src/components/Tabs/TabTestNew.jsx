import React from 'react'
import Tabs from './Tabs'

const TabTest = () => {

    function RandomComponent() {
        return <h1>Some random content</h1>
    }

    const tabs = [{
        label: "Home ",
        content: <div>This is the Home Content</div>
    },
    {
        label: "About ",
        content: <div>This is the About Content</div>
    },
    {
        label: "Product ",
        content: <RandomComponent />
    }]

    const handleOnChange = (getCurrentIndex) => {
        console.log(getCurrentIndex);


    }
    return (
        <div>
            <Tabs tabsContent={tabs} OnChange={handleOnChange} />

        </div>
    )
}

export default TabTest