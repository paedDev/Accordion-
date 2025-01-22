import React from 'react'
import Tabs from './Tabs'
const Tabtest = () => {
    const RandomComponent = () => {
        return <div className='text-center'>Some Random Content</div>
    }
    const tabs = [
        {
            label: "Home Page",
            content: <div className='text-center '>
                <div className='lg:w-2/4 mx-auto '>
                    <div className='space-y-5 border p-5 border-gray-100 shadow-xl rounded h-64 overflow-auto mt-24'>
                        <h1 className='text-gray-500'>Home Page</h1>
                        <p className='text-gray-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem porro impedit neque vitae suscipit natus autem necessitatibus esse optio, eaque, quam dignissimos quae voluptates ad cupiditate expedita repudiandae! Ad perspiciatis doloribus dignissimos illo qui id rem alias, fugit ipsum quia beatae. Quis sint aspernatur voluptate, maiores labore fugit quasi consectetur ex aperiam non. Impedit modi maiores magni iure quisquam tempora eveniet accusantium labore quos nam necessitatibus iste optio beatae, itaque temporibus voluptates. Eveniet dignissimos repellat laborum voluptatum commodi minima. Hic praesentium vitae modi in har</p>
                    </div>
                </div>
            </div>
        },
        {
            label: "About Page",
            content:
                <div className='text-center '>
                    <div className='lg:w-2/4 mx-auto mt-20 lg:mt-0'>
                        <div className='space-y-5 border p-5 border-gray-100 shadow-xl rounded'>
                            <h1 className='text-gray-500'>About Us</h1>
                            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt harum quibusdam quis, porro sed, ea a aut, libero veritatis distinctio ut laborum. Asperiores debitis libero nemo corrupti dolorem quas reiciendis ullam minus, </p>
                        </div>
                    </div>
                </div>

        },
        {
            label: "Product Page",
            content: <RandomComponent />

        },
    ]


    const handleCurrentIndex = (getCurrentIndex) => {
        console.log(getCurrentIndex);

    }

    return (
        <div>
            <Tabs tabsContent={tabs} onChange={handleCurrentIndex} />

        </div>
    )
}

export default Tabtest